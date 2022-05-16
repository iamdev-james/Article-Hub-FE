import { Component } from "react";
import { Carousel } from "@trendyol-js/react-carousel";

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
		return (
			<div>
				<p className="text-4xl">Hot Picks For You</p>
				<div>
					<Slider {...settings}>
						<div>
							<h3>1</h3>
						</div>
						<div>
							<h3>2</h3>
						</div>
						<div>
							<h3>3</h3>
						</div>
						<div>
							<h3>4</h3>
						</div>
						<div>
							<h3>5</h3>
						</div>
						<div>
							<h3>6</h3>
						</div>
					</Slider>
				</div>
			</div>
		);
	}
}

export default HotPicks;
