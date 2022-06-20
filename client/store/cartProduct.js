import Axios from "axios";

const GET_CART_PRODUCT = "GET_CART_PRODUCT";

const getCartProduct = (cartProduct) => {
  return {
    type: GET_CART_PRODUCT,
    cartProduct,
  };
};

export const getCartProductThunk = (userId,cartId) => async (dispatch) => {
  try {
    const {data} = await Axios.get(`/api/cart/${userId}/${cartId}`);
    dispatch(getCartProduct(data));
    // console.log(data)

  } catch (error) {
    console.log(error);
  }
};

export default function cartProductReducer(state = [], action) {
  switch (action.type) {
    case GET_CART_PRODUCT:
      return action.cartProduct;
    default:
      return state;
  }
}
