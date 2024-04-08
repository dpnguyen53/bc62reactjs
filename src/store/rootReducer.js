import { combineReducers } from "redux";
import userReducer from "./userReducer";
import shoppingReducer from "./shopping/reducer";

const rootReducer = combineReducers({
  // key: value
  userReducer,
  shoppingReducer,
});

export default rootReducer;
