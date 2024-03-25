import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
import data from "./data.json";

export default class LiftingStateUpCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listProduct: data,
    };
  }

  render() {
    return (
      <div>
        <h3 className="title">Bài tập giỏ hàng</h3>
        <div className="container">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng (0)
          </button>
        </div>
        <DanhSachSanPham listProduct={this.state.listProduct} />
        <Modal />
        <div className="row">
          <div className="col-sm-5">
            <img className="img-fluid" src="./img/vsphone.jpg" alt="" />
          </div>
          <div className="col-sm-7">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>AMOLED, FHD+ 2232 x 1080 pixels</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>Android 9.0 (Pie)</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>20 MP</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>Chính 48 MP & Phụ 8 MP, 5 MP</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>4 GB</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>6 GB</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
