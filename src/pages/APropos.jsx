import Banner from '../components/Banner'
import Collapse from '../components/Collapse'

import '../styles/APropos.css'

import imageAPropos from '../assets/apropos-banner-image.png'

function APropos () {

	const texteAPropos = '';
	const texteFiabilite = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
	const texteRespect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
	const texteService = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
	const texteSecurite = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."

	return (
		<div className="a-propos">
			<Banner bannerImg={imageAPropos} bannerText={texteAPropos} />
			<div className="a-propos-body">
				<Collapse collapseTitre="Fiabilité" collapseContent={texteFiabilite} collapseType="texte" />
				<Collapse collapseTitre="Respect" collapseContent={texteRespect} collapseType="texte" />
				<Collapse collapseTitre="Service" collapseContent={texteService} collapseType="texte" />
				<Collapse collapseTitre="Sécurité" collapseContent={texteSecurite} collapseType="texte" />
			</div>
		</div>
	);
}

export default APropos;