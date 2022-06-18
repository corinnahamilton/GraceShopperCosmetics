import Axios from "axios";

const GET_CART = "GET_CART";
const ADD_TO_CART = "ADD_TO_CART";
const DELETE_FROM_CART = "DELETE_FROM_CART";
const PLACE_ORDER = "PLACE_ORDER";

const getCart = (cart) => {
  return {
    type: GET_CART,
    cart,
  };
};

const addToCart = (product) => ({
  type: ADD_TO_CART,
  product,
});

const deleteFromCart = (product) => ({
  type: DELETE_FROM_CART,
  product,
});

// const placeOrder = (cart, newCart) => ({
//     type: PLACE_ORDER,
//     cart,
//     newCart,
// });

export const getCartThunk = (userId) => async (dispatch) => {
  try {
    const { data } = await Axios.get(`/api/cart/${userId}`);
    const cart = data[0];
    dispatch(getCart(cart));
  } catch (error) {
    console.log(error);
  }
};

export const addToCartThunk = (userId, productId) => async (dispatch) => {
  try {
    const { data } = await Axios.post(`/api/cart/${userId}/${productId}`);
    dispatch(addToCart(data));
    console.log("cartproduct", data);
  } catch (error) {
    console.log(error);
  }
};

export const deleteFromCartThunk = (userId, productId) => async (dispatch) => {
  try {
    await Axios.delete(`/api/cart/${userId}/${productId}`);
    dispatch(deleteFromCart(productId));
  } catch (error) {
    console.log(error);
  }
};

export default function cartReducer(state = { products: [] }, action) {
  switch (action.type) {
    case GET_CART:
      return action.cart;
    case ADD_TO_CART:
      return { ...state, products: [...state.products, action.product] };
    case DELETE_FROM_CART:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.product.id
        ),
      };
    default:
      return state;
  }
}
