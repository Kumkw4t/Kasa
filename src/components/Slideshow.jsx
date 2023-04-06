import {useState,useEffect} from 'react'
import '../styles/Slideshow.css'

import arrowRight from '../assets/arrow-right.svg'
import arrowLeft from '../assets/arrow-left.svg'

function Slideshow ( {locImages} ) {

	const imgNumber = locImages.length;
	const [ imgShown, setImgShown ] = useState(locImages[0]);
	const [ imgIndex, setImgIndex ] = useState(0);

	const nextImage = () => {
		(imgIndex >= (imgNumber-1)) ? setImgIndex(0) : setImgIndex(imgIndex+1);
	}

	const prevImage = () => {
		(imgIndex <= 0) ? setImgIndex(imgNumber-1) : setImgIndex(imgIndex-1);
	}

	useEffect(() => {setImgShown(locImages[imgIndex])}, [imgIndex]);

	return (
		<div className="slideshow-wrapper">
			<img src={arrowLeft} alt="flèche défilement gauche" className="arrow-slideshow arrow-slideshow-left" onClick={prevImage} />
			<img src={arrowRight} alt="flèche défilement droite" className="arrow-slideshow arrow-slideshow-right" onClick={nextImage}/>
			{imgNumber > 1 ? (<p className="slideshow-text">{imgIndex+1}/{imgNumber}</p>) : null}
			<img src={imgShown} alt="image de présentation du logement" className="slideshow-image" />
		</div>
	);
}

export default Slideshow