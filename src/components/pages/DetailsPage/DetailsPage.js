import React, { Component } from "react";
import { connect } from "react-redux";

class DetailsPage extends Component {
  // get the movies from database on component load
  componentDidMount() {
    this.props.dispatch({ type: "GET_MOVIES" });
    this.props.dispatch({ type: "GET_GENRES" });
  }

  // create the handleBackBtn method to send users back to movie page
  handleBackBtn = (event) => {
    this.props.history.push("/");
  };

  // creat the handleEditBtn method to send users to edit page
  handleEditBtn = (event) => {
    this.props.history.push(`/edit/${this.props.match.params.id}`);
  };

  render() {
    // set value of the params id to variable id
    const id = Number(this.props.match.params.id);

    //filter the object that matches the params.id
    const filteredMovie = this.props.store.movies.filter(function (movie) {
      return movie.id === id;
    });

    const filteredGenre = this.props.store.genres.filter(function (genre) {
      return genre.id === id;
    });

    return (
      <div>
        <button onClick={this.handleBackBtn}>Back To List</button>
        <br />
        <button onClick={this.handleEditBtn}>Edit</button>
        <div>
          {filteredMovie.map(function (movie) {
            return (
              <div key={movie.id}>
                <h2>{movie.title}</h2>
                <p>{movie.description}</p>
              </div>
            );
          })}
        </div>
        <br />
        <div>
          <h3>Genres</h3>
          {filteredGenre.map(function (genre, index) {
            return (
              <div key={index}>
                <p>{genre.genre_name}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(DetailsPage);
