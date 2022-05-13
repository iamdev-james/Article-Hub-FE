import { Component } from "react";
import './HeroSection.css';


class HeroSection extends Component {
  render () {
    return (
      <div className="hero-bg">
        <div>
          <div className="h-screen w-full overflow-x-hidden hero-color flex flex-row justify-left items-center">
            <div className="w-2/3 h-1/3 px-24 pt-6 m-auto flex flex-col justify-between items-center text-white">
              <p className="text-6xl text-white mb-5">Article Hub</p>
              <p className="text-lg px-16 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, corporis suscipit quaerat voluptatum qui dolorum quod sed vel minus dolorem maclarin makkehjd elostomana risticori palerialt?</p>
              <button className="rounded-full py-2 px-8 bg-white text-black text-lg hover:bg-black hover:text-white transition-all">Get started</button>
            </div>
            <div className="w-1/3"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default HeroSection;
