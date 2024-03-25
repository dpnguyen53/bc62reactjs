import React, { Component } from "react";

export default class ExampleState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urlCar: "./images/black-car.jpg",
    };
  }

  handleChangeUrl = (url) => {
    this.setState({
      urlCar: url,
    });
  };

  render() {
    const { urlCar } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid" src={urlCar} alt="" />
          </div>
          <div className="col-md-6">
            <button
              className="btn btn-dark"
              onClick={() => this.handleChangeUrl("./images/black-car.jpg")}
            >
              Black
            </button>
            <button
              className="btn btn-light"
              onClick={() => this.handleChangeUrl("./images/silver-car.jpg")}
            >
              Silver
            </button>
            <button
              className="btn btn-danger"
              onClick={() => this.handleChangeUrl("./images/red-car.jpg")}
            >
              Red
            </button>
          </div>
        </div>
      </div>
    );
  }
}
