function Banner ({bannerImg, bannerText}) {

	return (
		<div className="home-banner banner">
			<p className="banner-text">{bannerText}</p>
			<img className="banner-image" src={bannerImg} alt="mer contre des rochers" />
		</div>
	);
}

export default Banner