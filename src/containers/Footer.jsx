import Mail from '../assets/mail.png'
import twitter from '../assets/twitter.png'
import opensea from '../assets/opensea.png'
import assure from '../assets/assure.png'
import raritylogo from '../assets/Rarity logo.png'


const Footer = () => {

return (
    <div id="" className="w-full bg-black pt-12 pb-12">
        <div className="text-white">
            <p className="text-base md:text-lg">©️2022 , Valor of Knightfall</p>
            <p className="text-base md:text-lg">All Rights Reserved</p>
            <div className="mt-4">
                    <a href="mailto:knightfallnft@protonmail.com" className="inline-block pr-8" target="_blank" rel="noreferrer"><img src={Mail} alt="Mail logo" className="transform hover:scale-110" width="30"></img></a>
                    <a href="https://twitter.com/Vknightfall" className="inline-block pr-8" target="_blank" rel="noreferrer"><img src={twitter} alt="Twitter logo" className="transform hover:scale-110" width="30"></img></a>
                    <a href="https://opensea.io/collection/vknights" className="inline-block pr-8" target="_blank" rel="noreferrer"><img src={opensea} alt="Opensea logo" className="transform hover:scale-110" width="30"></img></a>
                    <a href="https://www.assuredefi.io/projects/valor-of-knightfall/ " className="inline-block pr-8" target="_blank" rel="noreferrer"><img src={assure} alt="Assure logo" className="transform hover:scale-110" width="30"></img></a>
                    <a href="https://raritysniper.com/nft-drops-calendar" className="inline-block pr-8" target="_blank" rel="noreferrer"><img src={raritylogo} alt="Assure logo" className="transform hover:scale-110" width="30"></img></a>
                </div>
        </div>
    </div>

)
}
    
export default Footer;