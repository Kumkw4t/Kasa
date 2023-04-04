import logo from '../logo.svg';
import '../styles/Home.css';
import {Link} from 'react-router-dom'

import Banner from '../components/Banner'
import LogementCard from '../components/LogementCard'

import logList from '../data/data.json'
import imageHome from '../assets/home-banner-image.png'

function Home() {

  const texteHome = "Chez vous, partout et ailleurs";

  return (
    <div className="home">
      <Banner bannerImg={imageHome} bannerText={texteHome}/>
      <div className="logement-container">
      {logList.map((logement) => (
        <LogementCard key={logement.id} locTitle={logement.title} locID={logement.id} locImage={logement.cover} />
      ))}
     </div>
    </div>
  );
}

export default Home;