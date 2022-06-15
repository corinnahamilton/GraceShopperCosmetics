import axios from 'axios';

const ONE_PRODUCT = 'ONE_PRODUCT';

export const _oneProduct = (product) => {
  return {
    type: ONE_PRODUCT,
    product,
  };
};

export const oneProduct = (id) => async (dispatch) => {
  const { data: product } = await axios.get(`/api/robots/${id}`);
  dispatch(_oneProduct(product));
};

export default function productReducer(state = {}, action) {
  switch (action.type) {
    case ONE_PRODUCT:
      return action.product;
    default:
      return state;
  }
}
