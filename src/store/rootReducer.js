import { combineReducers } from "redux";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  // key: value
  userReducer,
});

export default rootReducer;
