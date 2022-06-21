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

const addToCart = (data) => ({
  type: ADD_TO_CART,
  data,
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
    const { data } = await Axios.post(`/api/cart/${productId}`, {
      headers: {
        authorization: token,
      },
    });
    dispatch(addToCart(data));
  } catch (error) {
    console.log(error);
  }
};
// needs to be rewriten
// export const deleteFromCartThunk = (cartId, productId) => async (dispatch) => {
//   try {
//     await Axios.delete(`/api/cart/${cartId}/${productId}`);
//     dispatch(deleteFromCart(productId));
//   } catch (error) {
//     console.log(error);
//   }
// };

export default function cartReducer(state = { products: [] }, action) {
  switch (action.type) {
    case GET_CART:
      return action.cart;
    case ADD_TO_CART:
      return { ...state, products: [...state.products, action.product] };
    // case DELETE_FROM_CART:
    //   return {
    //     ...state,
    //     products: state.products.filter(
    //       (product) => product.id !== action.productId
    //     ),
    //   };

    default:
      return state;
  }
}
