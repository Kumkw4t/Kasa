import '../styles/Collapse.css'

import chevronBas from '../assets/chevron-bas.svg'
import chevronHaut from '../assets/chevron-haut.svg'

import {useState} from 'react'

function Collapse ( {collapseTitre, collapseContent, collapseType}) {

	const [open, setOpen] = useState(false);
	const toggle = () => {setOpen(!open)};

	return (
		<div className="collapse">
			<h3 className="collapse-title">{collapseTitre}</h3>
			{ open ? (<img className="collapse-chevron" src={chevronHaut} alt="chevron haut" onClick={toggle} />)
			:
			(<img className="collapse-chevron" src={chevronBas} alt="chevron bas" onClick={toggle} />)
			}
			{ open && ( collapseType === 'texte' ? <div className="collapse-body"><p>{collapseContent}</p></div> : null )}
			{ open && ( collapseType === 'liste' ?
				(<div className="collapse-body"><ul>
					{collapseContent.map( (equipement,i) => <li key={`equip-${i}`}>{equipement}</li>)}
				</ul></div>) 
			: null )}
		</div>
	);
}

export default Collapse