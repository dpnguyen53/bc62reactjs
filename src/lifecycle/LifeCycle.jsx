import React, { Component } from "react";
import Child from "./Child";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
    this.state = {
      number: 1,
    };
  }

  UNSAFE_componentWillMount() {
    // chỉ chạy 1 lần duy nhất khi được khởi tạo
    console.log("componentWillMount");
  }

  UNSAFE_componentWillUpdate() {
    // chạy khi state thay thôi
    console.log("componentWillUpdate");
  }

  componentDidUpdate() {
    // chạy khi state thay thôi và chạy sau render
    console.log("componentDidUpdate");
    localStorage.setItem("number", this.state.number);
    if (this.state.number === 5) {
      // call api
      console.log(" call api khi number bằng 5 trong componentDidUpdate");
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("UNSAFE_componentWillReceiveProps", nextProps);
  }

  componentDidMount() {
    // call api
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    if (nextState.number === 2) {
      return false;
    }
    // if (this.state.number === 2) {
    //   return false;
    // }

    return true;
  }

  render() {
    console.log("Render");
    return (
      <div>
        LifeCycle
        <span>Number: {this.state.number}</span>
        <button
          onClick={() => this.setState({ number: this.state.number + 1 })}
        >
          Tăng{" "}
        </button>
        <hr />
        <Child />
      </div>
    );
  }
}
