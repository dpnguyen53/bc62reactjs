import React, { Component } from "react";

export default class FormValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        id: "",
        username: "",
        fullname: "",
        phone: "",
        email: "",
      },
      errors: {
        id: "",
        username: "",
        fullname: "",
        phone: "",
        email: "",
      },
    };
  }

  handleOnchange = (event) => {
    const { name, value, pattern } = event.target;
    console.log("pattern", name, pattern);
    const newValues = { ...this.state.values, [name]: value };
    let newErrors = { ...this.state.errors };
    if (!value.trim()) {
      /**
       * {id: "", username:"",...}
       * name = "id"
       * newErrors.id = "Vui lòng nhập thông tin";
       */
      newErrors[name] = "Vui lòng nhập thông tin";
    } else {
      if (pattern) {
        const regex = new RegExp(pattern);
        const valid = regex.test(value); // đúng format: true, sai format: false
        if (!valid) {
          newErrors[name] = `${name} không đúng định dạng`;
          // if (name === "phone") {
          //   newErrors[name] = "Số điện thoại không đúng định dạng";
          // } else if (name === "fullname") {
          //   newErrors[name] = "Họ và tên không đúng định dạng";
          // }
          // switch (name) {
          //   case "phone":
          //     break;
          //     newErrors[name] = "Số điện thoại không đúng định dạng";
          //   default:
          //     break;
          // }
        } else {
          newErrors[name] = "";
        }
        console.log("valid", name, valid);
        // xử lý pattern có hợp lệ hay không
      } else {
        // newErrors[name] = "";
        if (value.length <= 4) {
          console.log("Do dai qua ngan");
          newErrors[name] = "Do dai qua ngan";
        } else {
          newErrors[name] = "";
        }
      }
    }
    this.setState({ values: newValues, errors: newErrors });
    // setState
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // Kiểm tra this.state.values có giá trị hay không
    // Nếu mà có lỗi thì không cho gưi dữ liệu đi
    let isValid = true;
    // có thể sử dụng vòng lặp for in
    Object.values(this.state.errors).forEach((item) => {
      if (item) {
        isValid = false;
      }
    });

    if (isValid) {
      // cho phép gửi dữ liệu đi
      console.log("values", this.state.values);
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="container mt-5 mb-5 d-flex justify-content-center">
        <form onSubmit={this.handleSubmit}>
          <div className="card px-1 py-4">
            <div className="card-body">
              <h6 className="card-title mb-3">Users Managements</h6>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="ID"
                      name="id"
                      onChange={this.handleOnchange}
                      onBlur={this.handleOnchange}
                    />
                    {errors.id && (
                      <span className="text text-danger">{errors.id}</span>
                    )}
                    {/* {errors.id ? (
                      <span className="text text-danger">{errors.id}</span>
                    ) : (
                      ""
                    )} */}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Username"
                        name="username"
                        onChange={this.handleOnchange}
                        onBlur={this.handleOnchange}
                        min={4}
                      />
                    </div>
                    {errors.username && (
                      <span className="text text-danger">
                        {errors.username}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Full name"
                        name="fullname"
                        onChange={this.handleOnchange}
                        onBlur={this.handleOnchange}
                      />
                    </div>
                    {errors.fullname && (
                      <span className="text text-danger">
                        {errors.fullname}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Phone"
                        name="phone"
                        onChange={this.handleOnchange}
                        onBlur={this.handleOnchange}
                        pattern="^(03|05|07|08|09)\d{8}$"
                      />
                    </div>
                    {errors.phone && (
                      <span className="text text-danger">{errors.phone}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Email"
                        name="email"
                        onChange={this.handleOnchange}
                        onBlur={this.handleOnchange}
                      />
                    </div>
                    {errors.email && (
                      <span className="text text-danger">{errors.email}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column text-center px-5 mt-3 mb-3">
                <small className="agree-text">
                  By Booking this appointment you agree to the
                </small>
                <a href="#" className="terms">
                  Terms &amp; Conditions
                </a>
              </div>
              <button className="btn btn-primary btn-block confirm-button">
                Confirm
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
