import axios from 'axios';

const CREATE_USER = 'CREATE_USER';

export const _createUser = (user) => {
  return {
    type: CREATE_USER,
    user,
  };
};

export const createUser = (user) => {
  return async (dispatch) => {
    const { data: created } = await axios.post('api/users', user);
    dispatch(_createUser(created));
  };
};

export default function createUserReducer(state = { user: [] }, action) {
  switch (action.types) {
    case CREATE_USER:
      return { users };
    default:
      return state;
  }
}
