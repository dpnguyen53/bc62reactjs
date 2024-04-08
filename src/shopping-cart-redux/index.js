import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
import data from "./data.json";

export default class LiftingStateUpCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listProduct: data,
      productDetail: null,
      listCart: [],
    };
  }

  // nhận data từ component SanPham truyền ra
  handleRenderDetailProduct = (product) => {
    this.setState({
      productDetail: product,
    });
  };

  findIndexProduct = (maSP) =>
    this.state.listCart.findIndex((product) => product.maSP === maSP);

  // nhận data từ component SanPham truyền ra
  handleAddCart = (product) => {
    const productCart = {
      maSP: product.maSP,
      tenSP: product.tenSP,
      hinhAnh: product.hinhAnh,
      giaBan: product.giaBan,
      soLuong: 1,
    };

    // clone lại array listCart từ state
    const listCartClone = [...this.state.listCart];
    const index = this.findIndexProduct(productCart.maSP);
    if (index !== -1) {
      // Tồn tại => update soLuong
      listCartClone[index].soLuong += 1;
    } else {
      // K Tồn tại => thêm
      listCartClone.push(productCart);
    }

    this.setState({
      listCart: listCartClone,
    });
  };

  // nhận data từ component Modal truyền ra
  handleDeleteProduct = (maSP) => {
    const listCartFilter = this.state.listCart.filter(
      (product) => product.maSP !== maSP
    );
    this.setState({
      listCart: listCartFilter,
    });
  };

  handleUpdateQty = (maSP, isPlus) => {
    const listCartClone = [...this.state.listCart];
    const index = this.findIndexProduct(maSP);
    if (index !== -1) {
      if (isPlus) {
        // tang sl
        listCartClone[index].soLuong += 1;
      } else {
        // giam sl
        if (listCartClone[index].soLuong > 1) {
          listCartClone[index].soLuong -= 1;
        }
      }
      this.setState({
        listCart: listCartClone,
      });
    }
  };

  totalQty = () => {
    return this.state.listCart.reduce(
      (total, product) => (total += product.soLuong),
      0
    );
  };

  render() {
    const { productDetail, listCart } = this.state;
    return (
      <div>
        <h3 className="title">Bài tập giỏ hàng</h3>
        <div className="container">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({this.totalQty()})
          </button>
        </div>
        <DanhSachSanPham
          listProduct={this.state.listProduct}
          getProduct={this.handleRenderDetailProduct}
          getProductAddCart={this.handleAddCart}
        />
        <Modal
          listCart={listCart}
          getProductDelete={this.handleDeleteProduct}
          getProductUpdateQty={this.handleUpdateQty}
        />
        <div className="row">
          <div className="col-sm-5">
            <img className="img-fluid" src={productDetail?.hinhAnh} alt="" />
          </div>
          <div className="col-sm-7">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{productDetail?.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{productDetail?.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{productDetail?.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{productDetail?.cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{productDetail?.ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{productDetail?.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
