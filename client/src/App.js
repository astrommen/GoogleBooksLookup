import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
// import logo from "./logo.svg";
// import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            {/* <Route exact path="/" component={Books} /> */}
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
