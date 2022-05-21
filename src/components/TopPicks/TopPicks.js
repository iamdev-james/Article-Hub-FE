import { Component } from "react";
import Slider from "react-slick";

class HotPicks extends Component {
	constructor() {
		super();
		this.state = {
			HotArticle: [
				{
					title: "Evolution of web 3",
					subTitle: "Web3 as a whole not a scam but real",
					articleImg: "https://media.istockphoto.com/photos/young-woman-leaving-picture-id1299310735?b=1&k=20&m=1299310735&s=170667a&w=0&h=EYbkIHkWWF7scKQ14spPLnD-aTXvtDlVMVL_9v5eSVg="
				},
				{
					title: "Is NFTs legal or not",
					subTitle: "Have you been thinking of venturing into the NFT world.......",
					articleImg: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500"
				},
				{
					title: "Transitioning into tech",
					subTitle: "A complete beginners guide on getting started as a developer",
					articleImg: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500"
				},
				{
					title: "Best web practices",
					subTitle: "Are you a developer but don't know the best way to do things",
					articleImg: "https://media.istockphoto.com/photos/lottery-picture-id95442265?b=1&k=20&m=95442265&s=170667a&w=0&h=fKu1DRGrbfXVXWHR5c0MlE2glGse5-l8DwoUrQH4UUA="
				},
				{
					title: "Best way to assimilate quickly",
					subTitle: "There are numerous ways in which you can assimilate........",
					articleImg: "https://images.unsplash.com/photo-1613336026275-d6d473084e85?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500"
				}
			],
		};
	}
	render() {
		var settings = {
			dots: true,
			infinite: true,
			speed: 500,
			autoplay: true,
			autoplaySpeed: 3000,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		const hotPicksStyle = {
			height: '70vh',
			width: '100%',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			color: 'white'
		}
		return (
			<div className="px-10">
				<p className="text-4xl py-16">Hot Picks For You</p>
				<div>
					<Slider {...settings}>
						{this.state.HotArticle.map(function(article){
            	return (
            		<div key={article.title}>
									<div style={{
									backgroundImage: `url(${article.articleImg})`, 
									...hotPicksStyle
									}}>
										<h2>{article.title}</h2>
										<p className="text-lg">{article.subTitle}</p>
									</div>
								</div>
            	)
 						})} 
					</Slider>
				</div>
			</div>
		);
	}
}

export default HotPicks;
