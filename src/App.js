import { Component } from 'react';
import './App.css';

// Components to be used 
import Header from './layouts/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import HotPicks from './components/TopPicks/TopPicks';

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
        <HeroSection />
        <HotPicks />
      </div>
    )
  }
}

export default App;
