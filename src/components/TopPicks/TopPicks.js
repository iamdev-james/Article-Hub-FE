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
					articleImg: "",
				},
			],
		};
	}
	render() {
		var settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		return (
			<div>
				<p className="text-4xl">Hot Picks For You</p>
				<div>
					<Slider {...settings}>
						<div>
							<h3>Graph QL</h3>
							<p>Want to know more about graphql? check this out</p>
						</div>
						<div>
						<h3>Nuxt Js</h3>
							<p>Want to know more about nuxt js? check this out</p>
						</div>
						<div>
						<h3>Typescript</h3>
							<p>Want to know more about typescript? check this out</p>
						</div>
						<div>
						<h3>React Js</h3>
							<p>Want to know more about React Js? check this out</p>
						</div>
						<div>
						<h3>Vue Js</h3>
							<p>Want to know more about Vue Js? check this out</p>
						</div>
						<div>
						<h3>Python</h3>
							<p>Want to know more about python? check this out</p>
						</div>
					</Slider>
				</div>
			</div>
		);
	}
}

export default HotPicks;
