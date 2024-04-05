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
  /**
   * action: add/update; delete; edit; search
   * action = {
   *    type: "EDIT",
   *    payload: user
   * }
   */
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default userReducer;
