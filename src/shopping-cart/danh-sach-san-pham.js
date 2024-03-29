import React, { Component } from "react";
import SanPham from "./san-pham";

export default class DanhSachSanPham extends Component {
  renderListProduct = () => {
    const { listProduct, getProduct, getProductAddCart } = this.props;

    return listProduct.map((item) => {
      return (
        <SanPham
          key={item.maSP}
          product={item}
          getProduct={getProduct}
          getProductAddCart={getProductAddCart}
        />
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderListProduct()}</div>
      </div>
    );
  }
}
