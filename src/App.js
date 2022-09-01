/* This is Parent App */
// Library
import React, {} from 'react'

// Components Directory
import './Main.css';
import NavigationBar from './components/NavigationBar';
import MyCarousel from './components/Carousel';
import Cardprofile from './components/CardProfile';
import MyTabs from './components/Tabs';
import Content from './components/Content';
import Etalase from './components/Etalase';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <header className='App-header'>
        <NavigationBar />
      <div className='Carousel-Profile'>
        <MyCarousel />
        <Cardprofile />
      </div>
        <MyTabs />
        <Content />
        <Etalase />
    </header>
    <div>
      <Footer />
    </div>
    </>
  );
}

export default App;
