import { Component } from "react";
import Slider from "react-slick";

class HotPicks extends Component {
	constructor() {
		super();
		this.state = {
      cryptoNews: [
        {
          "links": {
            "self": "http://example.com/articles",
            "next": "http://example.com/articles?page[offset]=2",
            "last": "http://example.com/articles?page[offset]=10"
          },
          "data": [{
            "type": "articles",
            "id": "1",
            "attributes": {
              "title": "JSON:API paints my bikeshed!"
            },
            "relationships": {
              "author": {
                "links": {
                  "self": "http://example.com/articles/1/relationships/author",
                  "related": "http://example.com/articles/1/author"
                },
                "data": { "type": "people", "id": "9" }
              },
              "comments": {
                "links": {
                  "self": "http://example.com/articles/1/relationships/comments",
                  "related": "http://example.com/articles/1/comments"
                },
                "data": [
                  { "type": "comments", "id": "5" },
                  { "type": "comments", "id": "12" }
                ]
              }
            },
            "links": {
              "self": "http://example.com/articles/1"
            }
          }],
          "included": [{
            "type": "people",
            "id": "9",
            "attributes": {
              "firstName": "Dan",
              "lastName": "Gebhardt",
              "twitter": "dgeb"
            },
            "links": {
              "self": "http://example.com/people/9"
            }
          }, {
            "type": "comments",
            "id": "5",
            "attributes": {
              "body": "First!"
            },
            "relationships": {
              "author": {
                "data": { "type": "people", "id": "2" }
              }
            },
            "links": {
              "self": "http://example.com/comments/5"
            }
          }, {
            "type": "comments",
            "id": "12",
            "attributes": {
              "body": "I like XML better"
            },
            "relationships": {
              "author": {
                "data": { "type": "people", "id": "9" }
              }
            },
            "links": {
              "self": "http://example.com/comments/12"
            }
          }]
        }
      ]
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
		return (
			<div className="px-10">
				<p className="text-4xl py-16">Hot Picks For You</p>
				<div>
					<Slider {...settings}> 
					</Slider>
				</div>
			</div>
		);
	}
}

export default HotPicks;
