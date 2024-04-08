const initialState = {
  listProduct: [],
  productDetail: null,
  listCart: [],
};

const shoppingReducer = (state = initialState, action) => {
  return { ...state };
};

export default shoppingReducer;
