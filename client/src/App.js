import React from "react";
import NavBar from "./components/NavBar";
import "./App.scss";
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./components/pages/Landing";
import history from "./utils/history";

function App() {
  return (
    <div className="App">
      {/* Don't forget to include the history module */}
      <Router history={history}>
        <NavBar />
        <Header />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
