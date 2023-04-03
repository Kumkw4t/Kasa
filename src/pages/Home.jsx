import logo from '../logo.svg';
import '../styles/Home.css';
import {Link} from 'react-router-dom'

import Banner from '../components/Banner'
import LogementList from '../components/LogementList'

import dataJSON from '../data/data.json'
import image from '../assets/home-banner-image.png'

function Home() {

  const texte = "Chez vous, partout et ailleurs";

  return (
    <div className="Home">
      <Banner bannerImg={image} bannerText={texte}/>
      <LogementList />
    </div>
  );
}

export default Home;