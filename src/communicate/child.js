import React, { Component } from "react";

export default class Child extends Component {
  handleResetUsername = () => {
    const usernameReset = "Cybersoft";
    // truyền data ra component cha, thông qua props getUserReset
    this.props.getUserReset(usernameReset);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h3>* Child</h3>
        <p>Username: {this.props.username}</p>
        <button className="btn btn-danger" onClick={this.handleResetUsername}>
          Reset Username
        </button>
      </div>
    );
  }
}
