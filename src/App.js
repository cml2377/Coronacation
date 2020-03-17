import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Request from './components/RequestForm';
import Landing from './components/pages/Landing';
import NeighborStats from './components/pages/NeighborhoodStats';

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Header />

          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
