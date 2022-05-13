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
					<Carousel show={1} slide={1} swiping={true}>
						<div className="h-64 my-10" color="#2d66c3">We love Web 🌐</div>
						<div className="h-64 my-10" color="#f44336">We love Developers 👩🏻‍</div>
            <div className="h-64 my-10" color="#d53f8c">This is our github</div>
            <div className="h-64 my-10" color="#f27a1a">This is our website</div>
					</Carousel>
				</div>
			</div>
		);
	}
}

export default HotPicks;
