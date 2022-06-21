import Axios from 'axios';

const GET_CART = 'GET_CART';
const ADD_TO_CART = 'ADD_TO_CART';
const DELETE_FROM_CART = 'DELETE_FROM_CART';

const getCart = (cart) => {
  return {
    type: GET_CART,
    cart,
  };
};

const addToCart = (cart) => ({
  type: ADD_TO_CART,
  cart,
});

const deleteFromCart = (productId) => ({
  type: DELETE_FROM_CART,
  productId,
});

//with token
export const getCartThunk = () => async (dispatch) => {
  try {
    let token = window.localStorage.getItem('token');
    const { data: cart } = await Axios.get('/api/cart', {
      headers: {
        authorization: token,
      },
    });
    dispatch(getCart(cart));
  } catch (error) {
    console.log(error);
  }
};

export const addToCartThunk = (productId) => async (dispatch) => {
  try {
    let token = window.localStorage.getItem('token');
    const { data: cart } = await Axios.post(`/api/cart/${productId}`, {
      authorization: token,
    });
    dispatch(addToCart(cart));
  } catch (error) {
    console.log(error);
  }
};

export const deleteFromCartThunk = (cartId, productId) => async (dispatch) => {
  try {
    await Axios.delete(`/api/cart/${cartId}/${productId}`);
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
      return action.cart;
    case DELETE_FROM_CART:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.productId
        ),
      };

    default:
      return state;
  }
}
