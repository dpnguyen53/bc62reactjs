import React, { Component } from "react";
import UserItem from "./UserItem";
import { connect } from "react-redux";

class Users extends Component {
  renderListUsers = () => {
    const { users, keyword } = this.props;
    // filter
    const usersFilter = users.filter((user) => {
      return user.fullname.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });

    return usersFilter?.map((user) => {
      return <UserItem key={user.id} user={user} />;
    });
  };

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>{this.renderListUsers()}</tbody>
        </table>
      </div>
    );
  }
}

// mapStateToProps: lấy data từ reducer xuống component chuyển thành props để sử dụng
const mapStateToProps = (state) => {
  return {
    // key: value
    users: state.userReducer.listUsers,
    keyword: state.userReducer.keyword,
  };
};

export default connect(mapStateToProps, null)(Users);
