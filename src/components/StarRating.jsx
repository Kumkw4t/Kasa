import starFull from '../assets/star-full.svg'
import starEmpty from '../assets/star-empty.svg'

function StarRating ( {rating, ratingMax} ) {

	return (
		<div className="location-review">
			{Array(parseInt(rating,10)).fill(0).map((_,i) => <img key={`star-full${i}`} src={starFull} alt="étoile pleine" className="star-review star-full" />)}
			{Array(parseInt(ratingMax-rating,10)).fill(0).map((_,i) => <img key={`star-empty${i}`} src={starEmpty} alt="étoile vide" className="star-review star-empty" />)}
		</div>
	);
}

export default StarRating;