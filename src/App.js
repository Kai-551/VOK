import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import Footer from './containers/Footer'
import Home from './Home'
import Mint from './Mint'

import bg from './assets/vkteaser.jpeg'
import twitter from './assets/twitter.png'
import opensea from './assets/opensea.png'
import assure from './assets/assure.png'
import raritylogo from './assets/Rarity logo.png'

function App() {
  return (
    <div className="App bg-black">
      <Router>
      <div className="bg-black block fixed w-full z-50">
            <Link to="/#" ><img src={bg} alt="Logo" width="80" className="float-left"></img></Link>
            <Link to="mint" className="" ><h3 className="text-white hover:text-red-500 text-xl md:text-4xl inline-block m-2 mt-4">Mint</h3></Link>
            <Link to="/#vision" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start'})} className="" ><h3 className="text-white hover:text-red-500 text-lg md:text-2xl inline-block m-2">Vision</h3></Link>
            <Link to="/#steps" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start'})} className="" ><h3 className="text-white hover:text-red-500 text-lg md:text-2xl  inline-block m-2">Steps</h3></Link>
            <Link to="/#roadmap" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start'})} className="" ><h3 className="text-white hover:text-red-500 text-lg md:text-2xl  inline-block m-2">Roadmap</h3></Link>
            <Link to="/#faq" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start'})} className="" ><h3 className="text-white hover:text-red-500 text-lg md:text-2xl  inline-block m-2">FAQ</h3></Link>
            <Link to="/#team" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start'})} className="" ><h3 className="text-white hover:text-red-500 text-lg md:text-2xl  inline-block m-2">Team</h3></Link>
            <Link to="/#utilities" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start'})} className="" ><h3 className="text-white hover:text-red-500 text-lg md:text-2xl  inline-block m-2">Utilities</h3></Link>
            <div className="inline-block md:mt-6 md:float-right">
                <a href="https://twitter.com/Vknightfall" className="inline-block pr-8" target="_blank" rel="noreferrer"><img src={twitter} alt="Twitter logo" className="transform hover:scale-110" width="30"></img></a>
                <a href="https://opensea.io/collection/vknights" className="inline-block pr-8" target="_blank" rel="noreferrer"><img src={opensea} alt="Opensea logo" className="transform hover:scale-110" width="30"></img></a>
                <a href="https://www.assuredefi.io/projects/valor-of-knightfall/ " className="inline-block pr-8" target="_blank" rel="noreferrer"><img src={assure} alt="Assure logo" className="transform hover:scale-110" width="30"></img></a>
                <a href="https://raritysniper.com/nft-drops-calendar" className="inline-block pr-8" target="_blank" rel="noreferrer"><img src={raritylogo} alt="Assure logo" className="transform hover:scale-110" width="30"></img></a>
            </div>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="mint" element={<Mint />} />
      </Routes>

      <Footer />
      </Router>
    </div>
  );
}

export default App;
