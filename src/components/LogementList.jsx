import {Link} from 'react-router-dom'

import LogementFiche from './LogementFiche'
import logList from '../data/data.json'

import '../styles/LogementList.css'

function LogementList () {
	return (
	<div className="logement-container">
		{logList.map((logement) => (
			<LogementFiche key={logement.id} locTitle={logement.title} locID={logement.id} locImage={logement.cover} />
		))}
      <Link to="/fiche_logement">Fiche test</Link>
     </div>
    );
}

export default LogementList