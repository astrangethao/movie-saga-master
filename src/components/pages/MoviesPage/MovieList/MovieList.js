import React, { Component } from "react";
import { connect } from "react-redux";
import MovieItem from "../MovieItem/MovieItem";

class MovieList extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_MOVIES" });
    console.log(this.props.history);
  }

  render() {
    return (
      <div>
        {this.props.store.movies.map((movie) => {
          return <MovieItem key={movie.id} movie={movie} />;
        })}
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(MovieList);
