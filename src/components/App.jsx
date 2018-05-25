import React from 'react';
import Header from './Header';
import wallpaper from '../assets/images/body-bg.svg';
import PictureList from './PictureList';
import Contact from './Contact';
import Footer from './Footer';
import LandingPage from './LandingPage';
import PreLandingPage from './PreLandingPage';
import About from './About';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

function App(){

  const appStyleSheet = {
    backgroundImage: `url(${wallpaper})`,
    backgroundRepeat: 'repeat-y',
    backgroundSize: 'cover',
    height: '150vh',
    width: '100vw'
  }

  return (
    <div style={appStyleSheet}>
      <style jsx global>{`
          @import url('https://fonts.googleapis.com/css?family=Didact+Gothic');
          .main-container {
            margin: 2% 20%;
            padding: 8%;
            background-color: white;
            box-shadow: #303d401c 0px 0px 4px 6px;
            height: 200px;
          }
          @media screen and (max-width: 650px){
            .main-container {
              margin: 3% 10%;
            }
            `}
      </style>
      <Header />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/a' component={PreLandingPage} />
        <Route exact path='/gallery' component={PictureList} />
        <Route path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route component={Error404} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
