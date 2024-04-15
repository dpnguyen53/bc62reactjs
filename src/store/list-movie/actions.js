import * as ActionType from "./constants";

export const actListMovieRequest = () => {
  return {
    type: ActionType.LIST_MOVIE_REQUEST,
  };
};

export const actListMovieSuccess = (data) => {
  return {
    type: ActionType.LIST_MOVIE_SUCCESS,
    payload: data,
  };
};

export const actListMovieFailed = (error) => {
  return {
    type: ActionType.LIST_MOVIE_FAILED,
    payload: error,
  };
};
