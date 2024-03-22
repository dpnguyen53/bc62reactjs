import React, { Component } from "react";

export default class RenderingElements extends Component {
  userName = "Cybersoft";
  age = 5;

  fullname = "Trinh";
  address = "112 Cao Thang";
  phoneNumber = 123;

  today = 5;

  showInfoTrinh() {
    return (
      <p>
        Hello {this.fullname} - Address: {this.address} - SDT:
        {this.phoneNumber}
      </p>
    );
  }

  whatWeDo() {
    // if (this.today === 2 || this.today === 6) {
    //   return <p>Di hoc</p>;
    // } else {
    //   return <p>Di choi</p>;
    // }

    return this.today === 2 || this.today === 6 ? (
      <p>Di Hoc</p>
    ) : (
      <p>Di choi</p>
    );
  }

  render() {
    return (
      <div>
        <h2>*RenderingElements</h2>
        <p>
          Hello {this.userName} - Age: {this.age}
        </p>
        {this.showInfoTrinh()}

        {this.today === 2 || this.today === 6 ? <p>Đi học</p> : <p>Đi chơi</p>}
        {this.whatWeDo()}
      </div>
    );
  }
}
