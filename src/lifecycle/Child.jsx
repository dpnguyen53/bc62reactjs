import React, { Component } from "react";

export default class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Alice",
      childNumber: 1,
    };

    this.interval = null;
  }

  // UNSAFE_componentWillReceiveProps(nexProps) {
  //   console.log("UNSAFE_componentWillReceiveProps Child", nexProps);
  // }

  static getDerivedStateFromProps(nexProps, currentState) {
    console.log("getDerivedStateFromProps Child", nexProps, currentState);
    if (nexProps.number === 5) {
      return { ...currentState, username: "Đã chuyển thành 5" };
    }

    return null;
  }

  componentDidMount(){
    this.interval = setInterval(()=>{
      console.log("Hello");
    }, 1000)
  }

  componentWillUnmount(){
    // thực thi khi component bị huỷ
    console.log("componentWillUnmount");
    clearInterval(this.interval);
  }

  render() {
    console.log("render Child");
    return (
      <div>
        Child
        <p>Username: {this.state.username}</p>
        <p>Child Number: {this.state.childNumber}</p>
        <p>Props từ cha: {this.props.number}</p>
      </div>
    );
  }
}
