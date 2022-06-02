import bg from '../assets/vkteaser.jpeg'
import twitter from '../assets/twitter.png'
import opensea from '../assets/opensea.png'
import assure from '../assets/assure.png'


const Menu = () => {

return (
    <div id="menu" className="w-full bg-black z-50">
        <div className="bg-black inline">
            <a href="/" ><img src={bg} alt="Logo" width="50px" className="float-left"></img></a>
            <a href="" ><h3 className="text-white hover:text-red-500 text-xl md:text-4xl mt-12 inline-block">Mint</h3></a>
            <div className="inline-block mt-12 float-right">
                <a href="https://twitter.com/Vknightfall" className="inline-block pr-8" target="_blank" rel="noreferrer"><img src={twitter} alt="Twitter logo" className="transform hover:scale-110" width="50"></img></a>
                <a href="https://opensea.io/VKnightfall" className="inline-block pr-8" target="_blank" rel="noreferrer"><img src={opensea} alt="Opensea logo" className="transform hover:scale-110" width="50"></img></a>
                <a href="https://www.assuredefi.io/projects/valor-of-knightfall/ " className="inline-block pr-8" target="_blank" rel="noreferrer"><img src={assure} alt="Assure logo" className="transform hover:scale-110" width="50"></img></a>
            </div>
        </div>
    </div>

)
}
    
export default Menu;