import React, { Component } from "react";
import { connect } from "react-redux";
import MovieItem from "../MovieItem/MovieItem";
import Grid from "@material-ui/core/Grid";
class MovieList extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_MOVIES" });
  }

  render() {
    return (
      <div>
        <Grid container spacing={2}>
          {this.props.store.movies.map((movie) => {
            return <MovieItem key={movie.id} movie={movie} />;
          })}
        </Grid>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(MovieList);
