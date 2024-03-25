import React, { Component } from "react";
import Child from "./child";

export default class Communicate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Cybersoft",
    };
  }

  // handleReset: nhận data từ Child
  handleReset = (username) => {
    // cập nhật lại state
    this.setState({
      username,
    });
  };

  render() {
    return (
      <div>
        <h2>* Communicate</h2>
        <p>Username: {this.state.username}</p>
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({
              username: "AAA",
            });
          }}
        >
          Change Username
        </button>
        <Child username={this.state.username} getUserReset={this.handleReset} />
      </div>
    );
  }
}
