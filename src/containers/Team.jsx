import Kai from '../assets/Kai.jpg'
import Lady from '../assets/Lady.jpg'
import Mouse from '../assets/Mouse.jpg'
import Tor from '../assets/tor.jpg'

const Team = () => {

return (
    <div className="w-full mx-auto bg-black pb-24">
        <div className="">
            <h2 id="team" className="text-xl text-black md:text-4xl uppercase p-24 pb-4 ">Team</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-12">
            <div className="w-3/4 mx-auto rounded-lg bg-white mt-12">
                <h3 className="text-xl md:text-2xl pt-8 pb-4 text-black uppercase">Kai</h3>
                <img src={Kai} alt="Avatar Kai" className="mx-auto" width="100%"></img>
                <p className="text-black w-3/4 mx-auto text-base md:text-lg p-4">Specialist in Crypto, Promotion, and Team Management. </p>
            </div>
            <div className="w-3/4 mx-auto rounded-lg bg-white mt-12">
                <h3 className="text-xl md:text-2xl pt-8 pb-4 text-black uppercase">Tor</h3>
                <img src={Tor} alt="Avatar Kai" className="mx-auto" width="100%"></img>
                <p className="text-black w-3/4 mx-auto text-base md:text-lg p-4">Artist, Art School Major, Graphic Designer for Major Sporting Event Company </p>
            </div>
            <div className="w-3/4 mx-auto rounded-lg bg-white mt-12">
                <h3 className="text-xl md:text-2xl pt-8 pb-4 text-black uppercase">Lady Des</h3>
                <img src={Lady} alt="Avatar Kai" className="mx-auto" width="100%"></img>
                <p className="text-black w-3/4 mx-auto text-base md:text-lg p-4">Financial and Investment Professional, Former Employee of a Fortune 500 Investment Firm.</p>
            </div>
            <div className="w-3/4 mx-auto rounded-lg bg-white mt-12">
                <h3 className="text-xl md:text-2xl pt-8 pb-4 text-black uppercase">Mouse</h3>
                <img src={Mouse} alt="Avatar Kai" className="mx-auto" width="100%"></img>
                <p className="text-black w-3/4 mx-auto text-base md:text-lg p-4">Event Coordinator, Editor and Strategist.</p>
            </div>
        </div>
    </div>

)
}

export default Team;