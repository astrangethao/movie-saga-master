import React, { Component } from "react";
import { connect } from "react-redux";

class EditPage extends Component {
  state = {
    updatedMovie: {
      title: "",
      description: "",
    },
  };

  componentDidMount() {
    this.props.dispatch({ type: "GET_MOVIES" });
  }

  //create a handleBtn method to handle button click events
  handleBtn = (name) => (event) => {
    if (name === "cancel") {
      this.props.history.push(`/details/${this.props.match.params.id}`);
    }

    if (name === "save") {
      console.log("saved");
    }
  };

  // create a handleChangeTitle to set state for title
  handleChangeTitle = (event) => {
    this.setState(
      {
        updatedMovie: {
          ...this.state.updatedMovie,
          title: event.target.value,
        },
      },
      () => {
        console.log(this.state);
      }
    );
  };

  // create a handleChangeDesc to set state for description
  handleChangeDesc = (event) => {
    this.setState(
      {
        updatedMovie: {
          ...this.state.updatedMovie,
          description: event.target.value,
        },
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <div>
        <h1>Edit</h1>
        <br />
        <div>
          <button onClick={this.handleBtn("cancel")}>Cancel</button>
          <button onClick={this.handleBtn("save")}>Save</button>
        </div>
        <br />
        <div>
          <input
            type="text"
            onChange={this.handleChangeTitle}
            placeholder="title"
          />
        </div>
        <div>
          <input
            type="text"
            onChange={this.handleChangeDesc}
            placeholder="description"
          />
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(EditPage);
