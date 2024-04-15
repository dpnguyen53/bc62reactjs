import { combineReducers } from "redux";
import userReducer from "./userReducer";
import shoppingReducer from "./shopping/reducer";
import listMovieReducer from "./list-movie/reducer";

const rootReducer = combineReducers({
  // key: value
  userReducer,
  shoppingReducer,
  listMovieReducer,
});

export default rootReducer;
