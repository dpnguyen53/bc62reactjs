import * as ActionType from "./constants";

const initialState = {
  listUsers: [
    {
      id: 1,
      fullname: "Dinh Phuc Nguyen",
      username: "dpnguyen",
      email: "dpnguyen@gmail.com",
      phoneNumber: "123456789",
      type: "VIP",
    },
    {
      id: 2,
      fullname: "Nguyen Van A",
      username: "vana",
      email: "vana@gmail.com",
      phoneNumber: "123456789",
      type: "USER",
    },
    {
      id: 3,
      fullname: "Nguyen Van B",
      username: "vanb",
      email: "vana@gmail.com",
      phoneNumber: "123456789",
      type: "USER",
    },
  ],
  keyword: "",
  editUser: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.DELETE_USER:
      // Xoá user
      const { listUsers } = state;
      const usersFilter = listUsers.filter(
        (user) => user.id !== action.payload
      );
      state.listUsers = usersFilter;
      return { ...state };

    case ActionType.KEYWORD_USER:
      state.keyword = action.payload;
      return { ...state };

    case ActionType.SUBMIT_USER: {
      const user = action.payload;
      const listUsersClone = [...state.listUsers];
      if (user.id) {
        // UPDATE
        const index = listUsersClone.findIndex((item) => item.id === user.id);
        if (index !== -1) {
          listUsersClone[index] = user;
        }
      } else {
        //ADD
        const date = new Date();
        // clone user
        const userNew = { ...user, id: date.getTime() };
        listUsersClone.push(userNew);
      }

      state.listUsers = listUsersClone;
      return { ...state };
    }

    case ActionType.EDIT_USER: {
      state.editUser = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default userReducer;
