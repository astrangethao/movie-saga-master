import React, { Component } from "react";

class EditPage extends Component {
  render() {
    return (
      <div>
        <h1>Edit</h1>
        <br />
        <div>
          <button>Cancel</button>
          <button>Save</button>
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

export default EditPage;
