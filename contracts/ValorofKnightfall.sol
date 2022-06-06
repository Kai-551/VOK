// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

/// @title Valor of Knightfall NFT Smart Contract
/// @author Roland Strasser - https://kryptohr.ch -  by order of jr77j12 over https://fiverr.com
/// @notice This contract provides 7'000 vknights NFTs to be minted

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/interfaces/IERC2981.sol";
import '@uniswap/v2-core/contracts/interfaces/IUniswapV2Pair.sol';

contract vknights is ERC721Enumerable, Ownable, IERC2981 {
    using Strings for uint256;

    /// @notice base attributes of the contract*/
    string public baseExtension = ".json";
    string private baseURI;
    string private revealURI;
    string public contractURI;
    uint256 public tokenCounter;
    bool public paused = true;
    uint256 public maxmintAmount = 10;
    bool public revealed = false;
     

    /// @notice royalty fields
    address public royaltyReceiver;
    uint16 public royaltyBasisPoints;

    /// @notice minting price
    uint256 public mintingPrice = 175 ether;
    uint256 public whitelistPrice = 145 ether;
    uint256 public priceStep = 15 ether;
    uint256 public stepAmount = 100;

    /// @notice supply
    uint256 public maxSupply = 7000;

    /// @notice whitelist params
    bool public whitelistActive = false;
    uint256 public whitelistLimit = 500;
    uint256 public maxwhitelistmint = 2;
    uint256 public whitelistSize = 0;
    mapping(address => bool) public whitelist;
    mapping(address => uint256) whitelistClaimed;
    
    /// @notice Polygon USDC/WETH pair
    address pricePair = 0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc;
    uint256 private p0default = 1;
    uint256 private p1default = 551283356;

    /// @notice tolerance is used to accept volatility in USDC/WETH pair
    uint256 private slippage = 2;

    /// @notice constructor
    /// @param _newBaseURI for the base URI connection
    /// @param _royaltyReceiver receiver address for royalties
    /// @param _royaltyBasisPoints amount of royalties to claim as basis points
    /// @param _newRevealURI the uri pointing to the reveal json file
    /// @param _newContractURI the uri pointing to the contract json file
    constructor(
        string memory _newBaseURI,
        address _royaltyReceiver,
        uint16 _royaltyBasisPoints,
        string memory _newRevealURI,
        string memory _newContractURI
    ) ERC721("Valor of Knightfall", "VoK") {
        tokenCounter = 0;
        setBaseURI(_newBaseURI);
        setroyaltyReceiver(_royaltyReceiver);
        setroyaltyBasisPoints(_royaltyBasisPoints);
        setRevealURI(_newRevealURI);
        setContractURI(_newContractURI);
    }

    /// @notice public minting. Free for contract owner
    /// @param _mintAmount amount of NFTs that should be minted.
    function mintNFT(uint256 _mintAmount) public payable {
        require(!paused, "Contract is paused!");

        require(
            tokenCounter + _mintAmount <= maxSupply,
            "Maximum of possible NFTs is reached"
        );
        require(_mintAmount > 0, "At least one token must be minted");
        require(_mintAmount <= maxmintAmount, "Minting capacity exeeds allowed limit");

        uint256 mPrice = getCurrentMintingPrice();
        uint256 ethPrice = getETHValue(mPrice);

        if (msg.sender != owner()) {
            if(whitelistActive) {
                require(whitelist[msg.sender], "You are not whitelisted");
                require(whitelistClaimed[msg.sender] + _mintAmount <= maxwhitelistmint, "You exeed your whitelist allowance");
            }
            uint256 tolerance = (ethPrice * _mintAmount) * slippage / 100;
            require(msg.value >= (ethPrice * _mintAmount) - tolerance, "Payed Ether is too less for minting.");
            require(msg.value <= (ethPrice * _mintAmount) + tolerance, "Payed Ether is too less for minting.");
        }

        for (uint256 i = 1; i <= _mintAmount; i++) {
            tokenCounter++;
            if(whitelistActive) {
                whitelistClaimed[msg.sender] += 1;
            }
            _safeMint(msg.sender, tokenCounter);
        }
    }

    /// @notice read URI of Token for Metadata
    /// @dev overrides the erc721 standard because of the reveal mechanic. If revealSingle is true, it returns a url to the single point NFT. Else generic reply.
    /// @param _tokenId represents the ID of the NFT to view
    /// @dev is singleImage true it only returns the baseURI. So the baseURI must point directly to the .json file with metadata
    /// @dev is singleImage false it returns baseuri + tokennumber + .json. Every NFT must then have it's own .josn file
    function tokenURI(uint256 _tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(
            _exists(_tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );
        if(revealed) {
            return
            string(
                abi.encodePacked(baseURI, _tokenId.toString(), baseExtension)
            );
        } else {
            return string(revealURI); 
        }
        
    }

    /// @notice get NFTs of specific address
    /// @param _owner Wallet address to input. Not to be confused with the Ownable owner
    /// @return tokenIds as a list of all the NFT ids the wallet owns
    function getNFTContract(address _owner)
        public
        view
        returns (uint256[] memory)
    {
        uint256 ownerTokenCount = balanceOf(_owner);
        uint256[] memory tokenIds = new uint256[](ownerTokenCount);
        for (uint256 i; i < ownerTokenCount; i++) {
            tokenIds[i] = tokenOfOwnerByIndex(_owner, i);
        }
        return tokenIds;
    }

    /// @notice returns the royalty infos according eip-2981
    /// @param _tokenId not used
    /// @param _price to be calculated royalties of
    /// @return receiver the wallet address royalties must be paied to
    /// @return royaltyAmount calculated amount of royalties to be paied
    function royaltyInfo(uint256 _tokenId, uint256 _price)
        external
        view
        override
        returns (address receiver, uint256 royaltyAmount)
    {
        receiver = royaltyReceiver;
        royaltyAmount = getPercentageOf(_price, royaltyBasisPoints);
    }

    /// @notice calculates the royalties for secondary sale
    /// @param _amount as calculation bae
    /// @param _basisPoints to calculate royalties for
    /// @return value as the resulting royaltyamount
    function getPercentageOf(uint256 _amount, uint16 _basisPoints)
        internal
        pure
        returns (uint256 value)
    {
        value = (_amount * _basisPoints) / 10000;
    }

    /// @notice calculates the current minting price
    /// @return price as the resulting royaltyamount
    function getCurrentMintingPrice() public view returns (uint256 price) {
        uint256 factor = (tokenCounter + 1) / stepAmount;
        if (whitelistActive) {
            return (whitelistPrice + priceStep * factor);
        }
        return (mintingPrice + priceStep * factor);
    }

    /// @notice checks if user is whitelisted
    /// @param _address to be checked if in the whitelist array
    /// @return bool only checks if true or false
    function isWhitelisted(address _address) public view returns(bool) {
        return whitelist[_address];
    }

    /// @notice checks how many NFT a whitelist address has claimed yet
    /// @param _address to be checked for claims
    /// @return uint256 returns the amount of NFTs the address claimed with mintWhitelistNFT()
    /// @dev only mints with the mintWhitelistNFT() function are counted
    function getWhitelistClaim(address _address) public view returns(uint256) {
        return whitelistClaimed[_address];
    }

    /// @notice get mintingPrice in MATIC
    /// @param _value to be converted into MATIC
    /// @return uint256 amount in MATIC
    /// @dev token1 = MATIC, token2 = WETH
    function getETHValue(uint256 _value) public view returns(uint256) {
        IUniswapV2Pair pair = IUniswapV2Pair(pricePair);
        (uint p0, uint p1,) = pair.getReserves();

        if(p0 == 0) {
            p0 = p0default;
        }
        if(p1 == 0) {
            p1 = p1default;
        }

        p0 = p0 * 10 ** 12;
        
        uint256 ethvalue = _value * p1 / p0;
        return ethvalue;
    }

    function getMintingPriceETH() public view returns(uint256) {
        return getETHValue(getCurrentMintingPrice());
    }

    /// @notice only owner functions

    /// @notice sets minting price
    /// @param _newPrice represents the new price in WEI format
    function setmintingPrice(uint256 _newPrice) public onlyOwner {
        mintingPrice = _newPrice;
    }

    /// @notice sets whitelist price
    /// @param _newWhitelistPrice represents the new price in WEI format
    function setWhitelistPrice(uint256 _newWhitelistPrice) public onlyOwner {
        whitelistPrice = _newWhitelistPrice;
    }

    /// @notice changes base uri
    /// @param _newBaseURI a string holding a URL
    /// @dev The _newBaseURI must contain a / at the end
    function setBaseURI(string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }

    /// @notice changes reveal uri
    /// @param _newRevealURI a string holding a URL
    /// @dev The _newBaseURI must contain a / at the end
    function setRevealURI(string memory _newRevealURI) public onlyOwner {
        revealURI = _newRevealURI;
    }

    /// @notice changes contract uri
    /// @param _newContractURI a string holding a URL
    /// @dev The _newBaseURI must contain a / at the end
    function setContractURI(string memory _newContractURI) public onlyOwner {
        contractURI = _newContractURI;
    }

    /// @notice sets tolerance for USDC/ETH conversion
    /// @param _newTolerance represents the new tolerance value as number used as percent
    function setSlippage(uint256 _newTolerance) public onlyOwner {
        slippage = _newTolerance;
    }

    /// @notice sets maximal amout of nft to mint in one transaction
    /// @param _newmaxMintAmount as a number for the maximum
    function setmaxMintAmount(uint256 _newmaxMintAmount) public onlyOwner {
        maxmintAmount = _newmaxMintAmount;
    }

    /// @notice sets maximal amout of nft to mint on whitelist mint per tranaciton
    /// @param _newmaxMintAmount as a number of for the maximum
    function setmaxWhitelistAmount(uint256 _newmaxMintAmount) public onlyOwner {
        maxwhitelistmint = _newmaxMintAmount;
    }

    /// @notice changes extension of base uri
    /// @param _newBaseExtension a string holding a file extension. erc721 suggests it to be .json
    function setBaseExtension(string memory _newBaseExtension)
        public
        onlyOwner
    {
        baseExtension = _newBaseExtension;
    }

    /// @notice switches paused
    /// @dev normal and whitelist minting is stopped. Reserved minting is still possible
    function switchPaused() public onlyOwner {
        paused = !paused;
    }

    /// @notice switches reveal
    /// @dev switch the reveal state
    function switchRevealed() public onlyOwner {
        revealed = !revealed;
    }

    /// @notice switches whitelistActive
    /// @dev normal and whitelist minting is stopped. Reserved minting is still possible
    function switchWhitelistActive() public onlyOwner {
        whitelistActive = !whitelistActive;
    }

    /// @notice changes receiver address for second sale royalties
    /// @param _receiver address of new wallet address
    function setroyaltyReceiver(address _receiver) public onlyOwner {
        royaltyReceiver = _receiver;
    }

    /// @notice changes basis point for royalties calculation
    /// @param _amount in basis points for charging roylaties
    function setroyaltyBasisPoints(uint16 _amount) public onlyOwner {
        royaltyBasisPoints = _amount;
    }

    /// @notice updates the uniswap V2 price pair if this will be invalid
    /// @param _newPair contract address of the new price pair
    function updPricePair(address _newPair) public onlyOwner {
        pricePair = _newPair;
    }

    /// @notice updates the uniswap V2 price pair if this will be invalid
    /// @param p0 base value for the Stablecoin
    /// @param p1 base value for ETH
    function updPdefaults(uint256 p0, uint256 p1) public onlyOwner {
        p0default = p0;
        p1default = p1;
    }

    /// @notice Uploads a list of wallet addresses and saves it in the whitelist array
    /// @param accounts as a list of addresses
    /// @return uint256 returns the amount of addresses successfully saved
    /// @dev this is a very heavy function consuming a lot of gas. Limit set to 200 per transaction
    function writeWhitelist(address[] memory accounts) public onlyOwner returns (uint256) {
        require(accounts.length + whitelistSize <= whitelistLimit, "Max entries for whitelist reached!");
        uint256 taskCounter = 0;
        for (uint256 i = 0; i < accounts.length; i++) {
            if(!whitelist[accounts[i]]) {
                whitelist[accounts[i]] = true;
                whitelistSize++;
                taskCounter++;
            }
        }
        return taskCounter;
    }

    /// @notice withdraws all ETH from the contract to the owner wallet
    function withdraw() public payable onlyOwner {
        require(payable(msg.sender).send(address(this).balance));
    }
}
