import React, { Component } from "react";

class MovieItem extends Component {
  render() {
    return (
      <div>
        <img src={this.props.movie.poster} alt="poster" />
        <br />
        <h2>{this.props.movie.title}</h2>
        <div>{this.props.movie.description}</div>
        <br />
      </div>
    );
  }
}

export default MovieItem;
