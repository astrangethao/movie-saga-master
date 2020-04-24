import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import EditPage from "../pages/EditPage/EditPage";

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          <header className="App-header">
            <h1 className="App-title">Movie Database</h1>
          </header>
          <br />

          <Route exact path="/" component={MoviesPage} />
          <Route exact path="/details" component={DetailsPage} />
          <Route exact path="/edit" component={EditPage} />
        </Router>
      </div>
    );
  }
}

export default App;
