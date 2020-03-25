import React from "react";
import NavBar from "./components/NavBar";
import "./App.scss";
import { Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import FindNeed from "./components/pages/FindNeed";
import PostNeed from "./components/pages/PostNeed";
import Landing from "./components/pages/Landing";
import history from "./utils/history";

function App() {
  return (
    <div className="App">
      {/* Don't forget to include the history module */}
      <Router history={history}>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/find_need" component={FindNeed} />
          <Route path="/post_need" component={PostNeed} />
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
