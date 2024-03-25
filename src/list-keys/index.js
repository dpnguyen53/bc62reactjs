import React, { Component } from "react";
import data from "./data.json";

export default class ListKeys extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listUser: [
        { username: "Nguyen", age: 18 },
        { username: "Trinh", age: 20 },
        { username: "Nam", age: 25 },
      ],
      listMovie: data,
    };
  }

  renderListUser = () => {
    return this.state.listUser.map((item, index) => {
      return (
        <li key={index}>
          Ten: {item.username} - Tuoi: {item.age}
        </li>
      );
    });
  };

  renderListMovie = () => {
    return this.state.listMovie.map((item) => {
      return (
        <div key={item.maPhim} className="col-md-3">
          <div className="card">
            <img className="card-img-top" src={item.hinhAnh} alt="" />
            <div className="card-body">
              <h4 className="card-title">{item.tenPhim}</h4>
              <p className="card-text">{item.moTa}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h2>* ListKeys</h2>
        <ul>
          {this.state.listUser.map((item, index) => {
            return (
              <li key={index}>
                Ten: {item.username} - Tuoi: {item.age}
              </li>
            );
          })}
        </ul>
        <hr />
        <ul>{this.renderListUser()}</ul>
        <hr />
        <div className="container">
          <div className="row">{this.renderListMovie()}</div>
        </div>
      </div>
    );
  }
}
