import '../styles/LogementCard.css'

function LogementCard ( {locTitle, locID, locImage} ) {
	return (
		<div className="logement-item">
			<h3 className="logement-item-titre">{locTitle}</h3>
			<img className="logement-item-image" src={locImage} alt="image représentant le logement" />
		</div>
	);
}

export default LogementCard