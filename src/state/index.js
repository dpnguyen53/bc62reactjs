import React, { Component } from "react";

export default class State extends Component {
  constructor(props) {
    super(props);
    // this.handleLogin = this.handleLogin.bind(this);
    // this.handleLogout = this.handleLogout.bind(this);
    this.state = {
      user: "Cybersoft",
      isLogin: false,
    };
  }

  handleLogin = () => {
    this.setState(
      {
        isLogin: true,
      },
      () => {
        console.log(this.state.isLogin);
      }
    );
  };

  handleLogout = () => {
    this.setState({
      isLogin: false,
    });
  };

  renderUI() {
    console.log("renderUI");
    if (this.state.isLogin) {
      return (
        <>
          <button className="btn btn-danger" onClick={this.handleLogout}>
            Logout
          </button>
          <h3>Hello {this.state.user}</h3>
        </>
      );
    } else {
      return (
        <>
          <button className="btn btn-success" onClick={this.handleLogin}>
            Login
          </button>
          <h3>Vui long login</h3>
        </>
      );
    }
  }

  render() {
    console.log("render");
    return (
      <div>
        <h2>* State</h2>

        {this.renderUI()}
      </div>
    );
  }
}
