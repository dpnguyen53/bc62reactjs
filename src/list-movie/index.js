import React, { Component } from "react";
import Movie from "./movie";
import axios from "axios";
import {
  actListMovieRequest,
  actListMovieSuccess,
  actListMovieFailed,
} from "./../store/list-movie/actions";
import { connect } from "react-redux";

class ListMovie extends Component {
  componentDidMount() {
    //Pending
    this.props.listMovieRequest();

    // call api
    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2MiIsIkhldEhhblN0cmluZyI6IjE3LzEwLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcyOTEyMzIwMDAwMCIsIm5iZiI6MTcwMDE1NDAwMCwiZXhwIjoxNzI5MjcwODAwfQ.xKQVYYnO9233wkXRw5oU4Dtx41flqDuUnA0DbkDYRmM",
      },
    })
      .then((result) => {
        this.props.listMovieSuccess(result.data.content);
      })
      .catch((error) => {
        this.props.listMovieFailed(error);
      });
  }

  renderListMoive = () => {
    const { data, loading } = this.props;
    if (loading) return <div>Loading....</div>;

    if (data && data.length > 0) {
      return data.map((movie) => <Movie key={movie.maPhim} movie={movie} />);
    }
  };

  render() {
    return (
      <div className="container">
        <h3>*ListMovie</h3>
        <div className="row">{this.renderListMoive()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.listMovieReducer.loading,
    data: state.listMovieReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    listMovieRequest: () => {
      dispatch(actListMovieRequest());
    },
    listMovieSuccess: (data) => {
      dispatch(actListMovieSuccess(data));
    },
    listMovieFailed: (error) => {
      dispatch(actListMovieFailed(error));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMovie);
