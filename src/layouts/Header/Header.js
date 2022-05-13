import { Component } from "react";
import { FaSearch } from 'react-icons/fa'
// import './header.css';

class Header extends Component {
  constructor () {
    super();
    this.state = {
      headerTitle: 'ArtHub'
    }
  }
  render () {
    return (
      <div className="w-full py-6 flex flex-row justify-around items-center bg-inherit fixed text-white">
        <div className="">
          <p className="text-2xl font-bold">{ this.state.headerTitle }</p>
        </div>
        <div className="w-1/3 text-core">
          <nav>
            <ul className="w-full list-style-none flex flex-row justify-between items-center">
              <li className="border-b-2 pb-2 mt-3 border-grey hover:border-black transition-all cursor-pointer">Home</li>
              <li className="border-b-2 pb-2 mt-3 border-grey hover:border-black transition-all cursor-pointer">About</li>
              <li className="border-b-2 pb-2 mt-3 border-grey hover:border-black transition-all cursor-pointer">Articles</li>
              <li className="border-b-2 pb-2 mt-3 border-grey hover:border-black transition-all cursor-pointer">Join as a writer</li>
            </ul>
          </nav>
        </div>
        <div className="relative">
          <FaSearch className='absolute left-2 top-3 text-black'/>
          <input type= "search" placeholder="Type here to search..." className="searchBox text-black text-sm w-48 h-10 py-2 px-2 rounded-lg pl-8" />
        </div>
        <div className="w-1/5 flex flex-row justify-between items-center">
          <button className="px-7 py-2 rounded-xl border-2 border-white text-lg font-semibold hover:bg-white hover:text-black transition-all">Login</button>
          <button className="px-7 py-2 rounded-xl bg-white text-black text-lg font-semibold hover:bg-black hover:text-white transition-all">Sign Up</button>
        </div>
      </div>
    )
  }
}

export default Header;
