import { DELETE_USER, EDIT_USER, KEYWORD_USER, SUBMIT_USER } from "./constants";

const actDeleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};

const actEditUser = (user) => {
  return {
    type: EDIT_USER,
    payload: user,
  };
};

const actSearch = (keyword) => {
  return {
    type: KEYWORD_USER,
    payload: keyword,
  };
};

const actSubmitUser = (user) => {
  return {
    type: SUBMIT_USER,
    payload: user,
  };
};

export { actDeleteUser, actEditUser, actSearch, actSubmitUser };
