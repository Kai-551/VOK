import './App.css';
import Header from './containers/Header'
import { ethers } from 'ethers'
import { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import s1 from './assets/sample1.jpg'
import s2 from './assets/sample2.jpg'
import s3 from './assets/sample3.jpg'
import s4 from './assets/sample4.jpg'
import s5 from './assets/sample5.jpg'

import {
    ValorAddress,
    ABI,
    targetChain
  } from './assets/config'

  // carousel responsivness
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

const Mint = () => {

    const [price, setPrice] = useState([])
    const [priceE, setPriceE] = useState([])
    const [wl, setWl] = useState([])
    const [count, setCount] = useState([])
    const [supply, setSupply] = useState([])
    const [max, setMax] = useState([])
    const [pricetopay, setPricetopay] = useState([])
    useEffect(() => {
        // call api or anything
        loadData()
     }, []);

     async function connect() {
        try {
        const provider = new ethers.providers.Web3Provider(
          window.ethereum,
          "any"
        );
  
        provider.on("network", (newNetwork, oldNetwork) => {
          // When a Provider makes its initial connection, it emits a "network"
          // event with a null oldNetwork along with the newNetwork. So, if the
          // oldNetwork exists, it represents a changing network
          if (oldNetwork) {
              window.location.reload();
          }
        }); 
        
        await provider.send("eth_requestAccounts", [])
        const signer = provider.getSigner()
        const address = await signer.getAddress() 
  
        let chainId = await provider.getNetwork();
        chainId = chainId['chainId'];
        if(chainId != targetChain) {
          document.getElementById("connectError").innerText = "Wrong network. Please change to Ethereum";
        } else {
          document.getElementById("connectError").innerText = "";
          document.getElementById("connector").classList.add("hidden")
          document.getElementById("minter").classList.remove("hidden")
        }

        

      } catch(e) {
        document.getElementById("connectError").innerText = "Connection Error";
      }
    }

    async function loadData() {
        const provider = new ethers.providers.Web3Provider(
            window.ethereum,
            "any"
        ) 
        const signer = provider.getSigner() 

        const contract = new ethers.Contract(ValorAddress, ABI, signer)
        let price = await contract.getCurrentMintingPrice();
        let pricEth = await contract.getMintingPriceETH();

        price = ethers.utils.formatUnits(price.toString().toString(), 'ether').toString()
        pricEth = ethers.utils.formatUnits(pricEth.toString().toString(), 'ether').toString().substr(0,6)

        let whitelistActive = await contract.whitelistActive()
        let tokenCount = await contract.tokenCounter()
        let paused = await contract.paused()
        let maxSupply = await contract.maxSupply()
        let max

        if(whitelistActive.toString() == "true") {
            max = await contract.maxwhitelistmint();
            document.getElementById("state").innerHTML = "Whitelist minting only!"
        } else {
            max = await contract.maxmintAmount();
            if(paused) {
              document.getElementById("state").innerHTML = "Minting paused"
              document.getElementById("mint").disabled = true
            } else {
              document.getElementById("state").innerHTML = "Minting open"
            }
        }

        if(tokenCount == max) {
            document.getElementById("state").innerHTML = "Sold out!"
        }

        if(paused == "true") {
            document.getElementById("state").innerHTML = "Minting is paused"
        }

        
        setPrice(price)
        setPriceE(pricEth)
        setWl(whitelistActive.toString())
        setCount(tokenCount.toString())
        setSupply(maxSupply.toString())
        setMax(max.toString())
        setPricetopay(pricEth)
    }

    async function mint() {
        const provider = new ethers.providers.Web3Provider(
            window.ethereum,
            "any"
        )  

        provider.on("network", (newNetwork, oldNetwork) => {
            if (oldNetwork) {
                window.location.reload();
            }
        })

        const signer = provider.getSigner()
    
        document.getElementById("mintError").innerHTML = ""
        let toMint = parseInt(document.getElementById("mintAmount").innerText);
        
        const creator = await signer.getAddress()  
        const contract = new ethers.Contract(ValorAddress, ABI, signer)
        let price = await contract.getMintingPriceETH();

        const finalPay = ethers.BigNumber.from((Number(price) * toMint).toString())

        try {
            await contract.mintNFT(toMint, {
                value: finalPay
            })
            } catch(e) {
                document.getElementById("mintError").innerHTML = "Minting failed! Check your wallet balance or connection"
            }     
        }

        function minusAmount() {
            var amount = parseInt(document.getElementById("mintAmount").innerText);
            amount = amount - 1;
            if(amount <= 1) {
              amount = 1;
            }
        
            document.getElementById("mintAmount").innerText = amount;
            setPricetopay(amount * priceE)
          }
        
          function addAmount() {
            var amount = parseInt(document.getElementById("mintAmount").innerText);
            amount = amount + 1;
            if(amount > max) {
              amount = max;
            }
        
            document.getElementById("mintAmount").innerText = amount;
            setPricetopay(amount * priceE)
          }

return (
    <div className="w-full mx-auto">
        <Header />
        <div className="mx-auto mt-12 mb-12 pt-20">
            <h2 className="text-2xl md:text-6xl text-white">Public Mint Starts: 6/11/2022 8:00PM UTC</h2>
            <h2 className="text-lg md:text-2xl text-white mt-4">Collection Name: Valor Knights </h2>
            <div id="slider" className="mx-auto mt-8">
              
            <Carousel className="w-3/4 mx-auto" responsive={responsive}>
              <div className="p-4">
                <img
                  src={s1}
                  className="rounded border-solid border-white border-2 hover:scale-110 mx-auto"
                  alt="Valor of Knightfall NFT sample"
                  width="300"
                ></img>
              </div>
              <div className="p-4">
                <img
                  src={s2}
                  className="rounded border-solid border-white border-2 hover:scale-110 mx-auto"
                  alt="Valor of Knightfall NFT sample"
                  width="300"
                ></img>
              </div>
              <div className="p-4">
                <img
                  src={s3}
                  className="rounded border-solid border-white border-2 hover:scale-110 mx-auto"
                  alt="Valor of Knightfall NFT sample"
                  width="300"
                ></img>
              </div>
              <div className="p-4">
                <img
                  src={s4}
                  className="rounded border-solid border-white border-2 hover:scale-110 mx-auto"
                  alt="Valor of Knightfall NFT sample"
                  width="300"
                ></img>
              </div>
              <div className="p-4">
                <img
                  src={s5}
                  className="rounded border-solid border-white border-2 hover:scale-110 mx-auto"
                  alt="Blockshambo NFT with Master hand"
                  width="300"
                ></img>
              </div>
            </Carousel>
          </div>
        </div>
        <div id="connector" className="mx-auto mt-12 mb-12 pt-6">
            <button id="connectBtn" onClick={connect} className="bgd-valor p-6 rounded-lg text-white hover:bg-red-400">Connect Wallet</button>
            <p id="connectError" className="text-white"></p>
        </div>
        <div id="minter" className="hidden mx-auto mt-12 mb-12 pt-6">
            <p className="text-white text-lg md:text-2xl">Current price $: <label className="pl-4 font-bold" id="price">{price}</label></p>
            <p className="text-white text-lg md:text-2xl">Current price ETH: <label className="pl-4 font-bold" id="price">{priceE}</label></p>
            <p className="text-white text-lg md:text-2xl">Currently <label className="pl-4 font-bold" id="count">{count}</label> of <label className="pl-4 font-bold" id="supply">{supply}</label> minted</p>
            <p className="text-white text-lg md:text-2xl">Current minting state: <label className="pl-4 font-bold" id="state"></label> </p>
            <div id="mintbox" className="text-center mt-24">
                <div className="mb-4 text-white">
                  <p className="text-xl">Amount to mint (max {max})</p>
                  <div className="mt-4">
                    <button onClick={minusAmount} className="text-4xl mr-4">-</button>
                    <span id="mintAmount" className="text-4xl">1</span>
                    <button onClick={addAmount} className="text-4xl ml-4">+</button>
                  </div>
                  <p className="text-xl">Estimated price in ETH: <label id="pricetopay">{pricetopay}</label></p>
                </div>  
                <button id="mint" onClick={mint} className="bgd-valor p-6 text-white rounded-lg text-xl md:text-2xl lg:text-4xl bg-red-500 hover:bg-red-400">Mint your NFT!</button>
                <p id="mintError" className="text-white"></p>
            </div>
        </div>
        
        
    </div>

)
}

export default Mint;