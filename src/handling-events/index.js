import React, { Component } from "react";

export default class HandlingEvents extends Component {
  handleClick() {
    console.log("handleClick");
  }

  handleClickParams(user, age) {
    console.log(user, age);
  }

  render() {
    return (
      <div>
        <h2>*HandlingEvents</h2>
        <button className="btn btn-success" onClick={this.handleClick}>
          Demo Click
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            this.handleClickParams("Nguyen", 18);
          }}
        >
          Demo Click Params
        </button>
      </div>
    );
  }
}
