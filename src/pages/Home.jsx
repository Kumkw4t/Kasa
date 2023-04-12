import logo from '../logo.svg';
import '../styles/Home.css';
import {Link} from 'react-router-dom'

import LogementCard from '../components/LogementCard'

import logList from '../data/data.json'
import imageHome from '../assets/home-banner-image.png'

function Home() {
  return (
    <div className="home">
      <div className="home-banner banner">
      <p className="banner-text">Chez vous, <span>partout et ailleurs</span></p>
      <img className="banner-image" src={imageHome} alt="mer contre des rochers" />
    </div>
      <div className="logement-container">
      {logList.map((logement) => (
        <Link key={`link${logement.id}`} to={`/fiche_logement/${logement.id}`}>
        <LogementCard key={logement.id} locTitle={logement.title} locID={logement.id} locImage={logement.cover} />
        </Link>
      ))}
     </div>
    </div>
  );
}

export default Home;