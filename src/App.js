import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Page/Header';
import TvMain from './Page/VedioTvMain';
import Footer from './Page/Footer';
import BioMain from './Page/BioMain';
import EventMain from './Page/events_main';
import GuestsMain from './Page/Guests_main';
import PhotosMain from './Page/Photos_main';
import IntroMAin from './Page/introMain';
import PublicMAin from './Page/Public-Speaking';
import MediaMain from './Page/mediaMain';
import './Page/CSS/app_style.css'

class App extends Component {


  render() {
    return (
      <div className="container" onKeyDown={this.keyPres} tabIndex="0">
        <Router>
          <Switch>
            <Route path="/" render={() => <Header title="Intro" />} />
            <Route path="/events" render={() => <Header title="events" />} />
            <Route path="/tvshows" render={() => <Header title="Tv Shows" />} />
            <Route path="/biography" render={() => <Header title="Biography" />} />
            <Route path="/guests" render={() => <Header title="Guests" />} />
            <Route path="/photos" render={() => <Header title="Photos" />} />
            <Route path="/vedios" render={() => <Header title="Vedios" />} />
            <Route path="/publicSpeaking" render={() => <Header title="Public Speaking" />} />
            <Route path="/media" render={() => <Header title="Media" />} />
          </Switch>
        </Router>
        <Router>
          <Switch>
            <Route exact path='/' component={IntroMAin} />
            <Route path='/events' component={EventMain} />
            <Route path='/tvshows' component={TvMain} />
            <Route path='/biography' component={BioMain} />
            <Route path='/guests' component={GuestsMain} />
            <Route path='/photos' component={PhotosMain} />
            <Route path='/vedios' component={TvMain} />
            <Route path='/publicSpeaking' component={PublicMAin} />
            <Route path='/media' component={MediaMain} />
          </Switch>
        </Router>

        <Footer />
      </div>
    );
  }

  keyPres = (event) => {
    if (event.keyCode == 38) {
      this.previousSlide();
    }
    else if (event.keyCode == 40) {
      this.nextSlide();
    }

  }

  nextSlide = () => {
    let path=window.location.pathname;
    if(path==='/')
    window.location.pathname ='/biography';
    else if(path==='/biography')
    window.location.pathname ='/vedios';
    else if(path==='/vedios')
    window.location.pathname ='/guests';
    else if(path==='/guests')
    window.location.pathname ='/tvshows';
    else if(path==='/tvshows')
    window.location.pathname ='/publicSpeaking';
    else if(path==='/publicSpeaking')
    window.location.pathname ='/events';
    else if(path==='/events')
    window.location.pathname ='/photos';
    else if(path==='/photos')
    window.location.pathname ='/media';
    else if(path==='/media')
    window.location.pathname ='/';

  }

  previousSlide = () => {
    let path=window.location.pathname;
    if(path==='/')
    window.location.pathname ='/media';
    else if(path==='/biography')
    window.location.pathname ='/';
    else if(path==='/vedios')
    window.location.pathname ='/biography';
    else if(path==='/guests')
    window.location.pathname ='/vedios';
    else if(path==='/tvshows')
    window.location.pathname ='/guests';
    else if(path==='/publicSpeaking')
    window.location.pathname ='/tvshows';
    else if(path==='/events')
    window.location.pathname ='/publicSpeaking';
    else if(path==='/photos')
    window.location.pathname ='/events';
    else if(path==='/media')
    window.location.pathname ='/photos';
  }
}

export default App;
