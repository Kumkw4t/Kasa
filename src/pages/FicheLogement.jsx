import {useParams} from 'react-router-dom'

import Slideshow from '../components/Slideshow'
import Collapse from '../components/Collapse'

import '../styles/FicheLogement.css'

import logList from '../data/data.json'
import starFull from '../assets/star-full.svg'
import starEmpty from '../assets/star-empty.svg'

function FicheLogement () {

	const { logementId } = useParams();
	const logement = logList.find( (element) => element.id === logementId);

	return (
		
		<div>
			<Slideshow locImages={logement.pictures} />
			<div className="location-header">
				<div className="location-title-box">
					<h1 className="location-title">{logement.title}</h1>
					<p className="location-location">{logement.location}</p>
					<div className="tags-wrapper">
					{logement.tags.map( (tag,i) => <div key={`${tag}-${i}`} className="tag">{tag}</div>)}
					</div>
				</div>

				<div className="location-host-review">
					<div className="location-host">
						<div className="host-name">{logement.host.name}</div>
						<img className="host-picture" src={logement.host.picture} alt="photographie de l'hôte" />
					</div>
					<div className="location-review">
						{Array(parseInt(logement.rating,10)).fill(0).map((_,i) => <img key={`star-full${i}`} src={starFull} alt="étoile pleine" className="star-review star-full" />)}
						{Array(parseInt(5-logement.rating,10)).fill(0).map((_,i) => <img key={`star-empty${i}`} src={starEmpty} alt="étoile vide" className="star-review star-empty" />)}
					</div>
				</div>
			</div>

			<div className="location-collapse-wrapper">
				<Collapse collapseTitre="Description" collapseContent={logement.description} collapseType="texte" />
				<Collapse collapseTitre="Equipements" collapseContent={logement.equipments} collapseType="liste" />
			</div>

		</div>
	);
}

export default FicheLogement;