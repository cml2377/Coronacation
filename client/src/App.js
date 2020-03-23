import React from "react";
import NavBar from "./components/NavBar";

import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import history from "./utils/history";
import RequestForm from "./components/RequestForm";


function App() {
  return (
    <div className="App">
      {/* Don't forget to include the history module */}
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact component={RequestForm} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>

      <Footer />

    </div>
  );
}

export default App;
