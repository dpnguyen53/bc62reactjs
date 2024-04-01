import React, { Component } from "react";

class Search extends Component {
  handleKeyWord = (event) => {
    const keyword = event.target.value;
    this.props.getKeyWord(keyword);
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

export default Search;
