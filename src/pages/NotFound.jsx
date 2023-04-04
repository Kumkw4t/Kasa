import {Link} from 'react-router-dom'

import '../styles/NotFound.css'

function NotFound () {
	return (
		<div className="not-found-body">
			<h1 className="not-found-404">404</h1>
			<p className="not-found-text">Oups! La page que vous demandez n'existe pas.</p>
			<Link className="not-found-link" to="/">Retourner sur la page d'accueil</Link>
		</div>
	);
}

export default NotFound;