import {useParams,useNavigate} from 'react-router-dom'
import {useEffect} from 'react'

import Slideshow from '../components/Slideshow'
import Collapse from '../components/Collapse'
import StarRating from '../components/StarRating'

import '../styles/FicheLogement.css'

import logList from '../data/data.json'
import starFull from '../assets/star-full.svg'
import starEmpty from '../assets/star-empty.svg'

function FicheLogement () {

	const { logementId } = useParams();
	const logement = logList.find( (element) => element.id === logementId);
	const idExists = (logement === undefined ? false : true);
	const navigate = useNavigate();

	useEffect (() => {
		if (!idExists) {
			(navigate("/not-found"));
		}
	}, [logement]);

	return (
		<div>
		{ idExists &&
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
					<StarRating rating={logement.rating} ratingMax={5} />
				</div>
			</div>

			<div className="location-collapse-wrapper">
				<Collapse collapseTitre="Description" collapseContent={logement.description} collapseType="texte" />
				<Collapse collapseTitre="Equipements" collapseContent={logement.equipments} collapseType="liste" />
			</div>
		</div>
		}
		</div>
	);
}

export default FicheLogement;