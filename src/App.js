import { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';

// Components to be used 
import Header from './layouts/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import HotPicks from './components/TopPicks/TopPicks';
import SideBar from './components/SideBar/SideBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      string: 'Article Hub home page'
    }
  }
  render () {
    return (
      <div className='App'>
        <Header />
        <div className='herosection'>
          <HeroSection />
        </div>
        <div className='hotPicks'>
          <HotPicks />
        </div>
        <div className='SideBar'>
          <SideBar />
        </div>
      </div>
    )
  }
}

export default App;
