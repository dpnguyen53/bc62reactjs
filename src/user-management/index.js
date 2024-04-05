import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import data from "./data.json";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listUsers: data,
      keyword: "",
      editUser: null,
    };
  }

  /**
   * Delete User
   */
  handleDeleteUser = (id) => {
    const { listUsers } = this.state;
    const usersFilter = listUsers.filter((user) => user.id !== id);

    this.setState({
      listUsers: usersFilter,
    });
  };

  handleGetKeyWord = (keyword) => {
    this.setState({
      keyword,
    });
  };

  /**
   * Add/Update User
   */
  handleSubmitUser = (user) => {
    // Tạo id cho user
    const date = new Date();
    // clone user
    const userNew = { ...user, id: date.getTime() };

    const listUsersClone = [...this.state.listUsers, userNew];
    this.setState(
      {
        listUsers: listUsersClone,
      },
      () => {
        console.log(this.state.listUsers);
      }
    );
  };

  handleEditUser = (user) => {
    this.setState({
      editUser: user,
    });
  };

  render() {
    // filter
    const { keyword, listUsers } = this.state;
    const usersFilter = listUsers.filter((user) => {
      return user.fullname.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });

    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search getKeyWord={this.handleGetKeyWord} />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
          >
            Add User
          </button>
        </div>
        <Users
          users={usersFilter}
          getUserDelete={this.handleDeleteUser}
          getEditUser={this.handleEditUser}
        />
        <Modal getUserSubmit={this.handleSubmitUser} />
      </div>
    );
  }
}

export default Home;
