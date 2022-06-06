import teaser from '../assets/vkteaser.jpeg'
import bannerlogo from '../assets/vkbannerlogo.jpeg'
import mail from '../assets/mail.png'
import twitter from '../assets/twitter.png'
import opensea from '../assets/opensea.png'
import assure from '../assets/assure.png'
import raritylogo from '../assets/Rarity logo.png'

import { HashLink as Link } from 'react-router-hash-link';

const Vision = () => {

return (
    <div id="vision" className="w-full mx-auto bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 text-white">
            <div className="p-12">
                <h2 className="text-2xl md:text-4xl">Our Vision</h2>
                <div className="mx-auto pt-12">
                    <p className="text-lg md:text-xl ">“You make most of your money in a bear market; you just don’t realize it at the time.” </p>
                    <p className="text-base md:text-xl ">- Investor Shelby Davis </p>
                </div>
                <p className="text-lg md:text-2xl  pt-12 italic">How would you profit off of 4 Million Dollars?</p>
                <p className="text-lg md:text-xl  pt-4">The door is only open once to get in the on the ground floor. We’re marketing our NFT project to the quick flipper, scalper, long term HODL’er and art lover. We want every type of NFT investor to be interested in this project and bringing value to each investor. </p>
            </div>
            <div className="">
                <img src={teaser} className="mx-auto" width="50%" alt="VK Teaser"></img>
                <Link to="mint" className="text-center" ><button className="uppercase font-bold  bgd-valor p-2 pl-8 pr-8 text-white rounded-lg text-2xl md:text-4xl bg-red-500 hover:bg-red-400 mb-4">Mint</button></Link>
                <div className="">
                    <a href="mailto:knightfallnft@protonmail.com" className="inline-block pr-8" target="_blank" rel="noreferrer"><img src={mail} alt="Mail logo" className="transform hover:scale-110" width="30"></img></a>
                    <a href="https://twitter.com/Vknightfall" className="inline-block pr-8" target="_blank" rel="noreferrer"><img src={twitter} alt="Twitter logo" className="transform hover:scale-110" width="30"></img></a>
                    <a href="https://opensea.io/collection/vknights" className="inline-block pr-8" target="_blank" rel="noreferrer"><img src={opensea} alt="Opensea logo" className="transform hover:scale-110" width="30"></img></a>
                    <a href="https://www.assuredefi.io/projects/valor-of-knightfall/ " className="inline-block pr-8" target="_blank" rel="noreferrer"><img src={assure} alt="Assure logo" className="transform hover:scale-110" width="30"></img></a>
                    <a href="https://raritysniper.com/nft-drops-calendar" className="inline-block pr-8" target="_blank" rel="noreferrer"><img src={raritylogo} alt="Assure logo" className="transform hover:scale-110" width="30"></img></a>
                </div>
            </div>
        </div>
        <div id="steps" className="grid grid-cols-1 md:grid-cols-3 text-white">
            <div className="m-8 bgd-valor p-6 rounded-lg hover:bgl-valor">
                <h3 className="text-xl md:text-2xl mb-8">Step 1: Artwork</h3>
                <p className="text-lg md:text-xl">We’ve created 100% genuine artwork from a professional designer. This is not a copy and paste NFT. On top of the unique art we’ve chosen the avatar/PFP style NFT’s which are still absolutely the top selling NFT’s on the market today. </p>
            </div>
            <div className="m-8 bgd-valor p-6 rounded-lg hover:bgl-valor">
                <h3 className="text-xl md:text-2xl mb-8">Step 2: Build an Increasing Floor Value Immediately</h3>
                <p className="text-lg md:text-xl">By systematically increasing the pricing with a Dynamic Pricing Smart Contract. Price increases after Whitelist, Public Sale and with every 100 sold there after. Whitelist owners will be in profit day one. This builds value to the “Quick Flipper” and “Scalper”. </p>
            </div>
            <div className="m-8 bgd-valor p-6 rounded-lg hover:bgl-valor">
                <h3 className="text-xl md:text-2xl mb-8">Step 3: Long Term Investing</h3>
                <p className="text-lg md:text-xl">By selling 3 different unique art collections, which will link together and create a profitable long term goal. We will build a large treasury with the profits, invest as a team during the bear market and reap the rewards from the inevitable rebound. By giving equal shares to all owners this builds trust and drives this project to be successful. Hence building value to the long term HODL’ers.</p>
            </div>
        </div>
        <div id="mindset" className="grid grid-cols-1 md:grid-cols-2 text-black bg-white">
            <div className="m-8 p-8 ">
                <h3 className="text-xl md:text-2xl mb-12">Our Team's Investment Mindset.</h3>
                <p className="text-lg md:text-xl">We can easily estimate a 4+ million dollar treasury with a near sellout of all the collections. What would you invest in to turn a profit? We all can decide to do stable coin lending, or a medium risk diversified portfolio, or do you have a keen eye to find the next project which will moon. We have a financial background and experience in the crypto world to make this happen. </p>
                <p className="text-lg md:text-2xl mt-4 italic">How would you shape the investments to make profits? </p>
            </div>
            <div className="m-8 p-8">
                <h3 className="text-xl md:text-2xl mb-12">Equality Vision.</h3>
                <p className="text-lg md:text-xl">Every owner is an equal share member. Want to invest for a select period of time then split the ENTIRE treasury (original treasury and all the profits) , send monthly profits to everyone or would you just keep compounding profits to make even more money? </p>
            </div>
        </div>
        
    </div>

)
}
    
export default Vision;