import {Link} from 'react-router-dom'
import '../styles/Header.css'
import kasa_logo from '../assets/logo.svg'

function Header () {
	return (
		<header className="kasa-header">
			<img className="kasa-logo-header" src={kasa_logo} alt="logo kasa" width="210" height="62"/>
			<nav className="header-nav">
				<Link className="header-nav-link" to="/">Accueil</Link>
				<Link className="header-nav-link" to="/a_propos">A propos</Link>
			</nav>
		</header>
	);
}

export default Header