import React, { Component } from "react";
import { connect } from "react-redux";

class DetailsPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_MOVIES" });
  }

  render() {
    const id = Number(this.props.match.params.id);

    const movie = this.props.store.movies.filter(function (movie) {
      return movie.id === id;
    });

    console.log("filter:", movie);

    return (
      <div>
        <h1>Details Pagessss</h1>
        <button>Back To List</button>
        <br />
        <button>Edit</button>
        <div>
          {movie.map(function (kitty) {
            return (
              <div key={kitty.id}>
                <h2>{kitty.title}</h2>
                <p>{kitty.description}</p>
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
