import React, { Component } from "react";
import { connect } from "react-redux";

class EditPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_MOVIES" });
  }

  handleBtn = (name) => (event) => {
    if (name === "cancel") {
      this.props.history.push(`/details/${this.props.match.params.id}`);
    }

    if (name === "save") {
      console.log("saved");
    }
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
          <input type="text" />
        </div>
        <div>
          <input type="text" />
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(EditPage);
