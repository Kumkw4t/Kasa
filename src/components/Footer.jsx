import footerLogo from '../assets/footer-logo.svg'
import '../styles/Footer.css'

function Footer () {
	return (
		<div className="footer">
			<img className="footer-logo" src={footerLogo} alt="logo Kasa" />
			<p className="footer-text">© 2020 Kasa. All rights reserved</p>
		</div>
	);
}

export default Footer