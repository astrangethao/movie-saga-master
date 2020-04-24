import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class MovieItem extends Component {
  handleImgClick = (event) => {
    this.props.history.push("/details");
  };

  render() {
    return (
      <div>
        <img
          onClick={this.handleImgClick}
          src={this.props.movie.poster}
          alt="poster"
        />
        <br />
        <h2>{this.props.movie.title}</h2>
        <div>{this.props.movie.description}</div>
        <br />
      </div>
    );
  }
}

export default withRouter(MovieItem);
