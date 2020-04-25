import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";
import "./EditPage.css";

class EditPage extends Component {
  state = {
    updatedMovie: {
      id: Number(this.props.match.params.id),
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
      console.log(this.state.updatedMovie);
      this.props.dispatch({
        type: "UPDATE_MOVIES",
        payload: this.state.updatedMovie,
      });
    }
  };

  // create a handleChangeTitle to set state for title
  handleChangeTitle = (event) => {
    this.setState({
      updatedMovie: {
        ...this.state.updatedMovie,
        title: event.target.value,
      },
    });
  };

  // create a handleChangeDesc to set state for description
  handleChangeDesc = (event) => {
    this.setState({
      updatedMovie: {
        ...this.state.updatedMovie,
        description: event.target.value,
      },
    });
  };

  render() {
    const id = Number(this.props.match.params.id);

    const filteredMovie = this.props.store.movies.filter((movie) => {
      return movie.id === id;
    });

    const movieTitle = filteredMovie.map((info) => {
      return info.title;
    });

    const movieDescription = filteredMovie.map((info) => {
      return info.description;
    });

    return (
      <div>
        <h1>Edit</h1>
        <br />
        <div>
          <Button
            className="ebtn"
            variant="contained"
            color="secondary"
            size="small"
            onClick={this.handleBtn("cancel")}
          >
            Cancel
          </Button>

          <IconButton
            className="ebtn"
            variant="contained"
            color="secondary"
            onClick={this.handleBtn("save")}
          >
            <SaveIcon fontSize="large" />
          </IconButton>
        </div>
        <br />

        <TextField
          className="standard-basic"
          label="Title"
          onChange={this.handleChangeTitle}
          value={movieTitle}
        />

        <TextField
          className="standard-basic"
          label="Description"
          onChange={this.handleChangeDesc}
          value={movieDescription}
        />
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(EditPage);
