import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Request from './components/pages/RequestForm';
import NeighborStats from './components/pages/NeighborhoodStats';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />

        <Profile />

        <Footer />
      </div>
    );
  }
}

export default App;
