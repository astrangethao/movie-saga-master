import React, { Component } from "react";
import { connect } from "react-redux";

class DetailsPage extends Component {
  // get the movies from database on component load
  componentDidMount() {
    this.props.dispatch({ type: "GET_MOVIES" });
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
    const movie = this.props.store.movies.filter(function (movie) {
      return movie.id === id;
    });

    return (
      <div>
        <button onClick={this.handleBackBtn}>Back To List</button>
        <br />
        <button onClick={this.handleEditBtn}>Edit</button>
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
