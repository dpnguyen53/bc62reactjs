import React, { Component } from "react";
import { connect } from "react-redux";
import { actSearch } from "./../store/actions";

class Search extends Component {
  handleKeyWord = (event) => {
    const keyword = event.target.value;
    this.props.search(keyword);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control mb-3 w-50"
        onChange={this.handleKeyWord}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    search: (keyword) => {
      dispatch(actSearch(keyword));
    },
  };
};

export default connect(null, mapDispatchToProps)(Search);
