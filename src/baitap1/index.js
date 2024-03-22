import React, { Component } from "react";
import Header from "./header";
import Nav from "./nav";
import Content from "./content";
import Footer from "./footer";

class Baitap1 extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="d-flex">
          <Nav />
          <Content />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Baitap1;
