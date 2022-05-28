import './App.css';

import Header from './containers/Header'
import Vision from './containers/Vision'
import Roadmap from './containers/Roadmap'
import FAQ from './containers/FAQ'
import Team from './containers/Team'
import Story from './containers/Story'
import Utilities from './containers/Utilities'

function Home() {
  return (
    <div className="App bg-black">
      <Header />
      <Vision />
      <Roadmap />
      <FAQ />
      <Team />
      <Story />
      <Utilities />
    </div>
  );
}

export default Home;
