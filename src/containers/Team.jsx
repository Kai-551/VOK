import Kai from '../assets/Kai.jpg'
import Lady from '../assets/Lady.jpg'
import Mouse from '../assets/Mouse.jpg'
import Tor from '../assets/Tor.jpg'

const Team = () => {

return (
    <div className="w-full mx-auto bg-black pb-24">
        <div className="">
            <h2 id="team" className="text-xl text-white md:text-4xl uppercase p-24 pb-4 ">Team</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-12">
            <div className="w-3/4 mx-auto rounded-lg bgd-valor mt-12">
                <div id="kai" className="rounded">
                    
                </div>
                <h3 className="text-xl md:text-2xl pt-2 text-white uppercase">KAI</h3>
                <h3 className="text-lg md:text-xl pt-2 text-white uppercase pb-6">Specialist</h3>
            </div>
            <div className="w-3/4 mx-auto rounded-lg bgd-valor mt-12">
                <div id="tor" className="rounded">
                </div>
                <h3 className="text-xl md:text-2xl pt-2 text-white uppercase">Tor</h3>
                <h3 className="text-lg md:text-xl pt-2 text-white pb-6" uppercase>Artist</h3>
            </div>
            <div className="w-3/4 mx-auto rounded-lg bgd-valor mt-12">
                <div id="lady" className="rounded">
                </div>
                <h3 className="text-xl md:text-2xl pt-2 text-white uppercase">Lady Des</h3>
                <h3 className="text-lg md:text-xl pt-2 text-white uppercase pb-6">FINANCES</h3>
            </div>
            <div className="w-3/4 mx-auto rounded-lg bgd-valor mt-12">
                <div id="mouse" className="rounded">
                </div>
                <h3 className="text-xl md:text-2xl pt-2 text-white uppercase">Mouse</h3>
                <h3 className="text-lg md:text-xl pt-2 text-white uppercase pb-6">STRATEGIST</h3>
            </div>
        </div>
    </div>

)
}

export default Team;