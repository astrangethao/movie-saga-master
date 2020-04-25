import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
          <Route exact path="/details/:id" component={DetailsPage} />
          <Route exact path="/edit/:id" component={EditPage} />
        </Router>
      </div>
    );
  }
}

export default App;
