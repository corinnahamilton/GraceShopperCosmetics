import axios from 'axios';

const CREATE_USER = 'CREATE_USER';

export const _createUser = (email) => {
  return {
    type: CREATE_USER,
    email,
  };
};

export const createUser = (user, history) => {
  return async (dispatch) => {
    const { data: token } = await axios.post('/api/users', user);
    window.localStorage.setItem('token', token);
    const { data: email } = await axios.get('/api/users/email', {
      headers: {
        token,
      },
    });
    dispatch(_createUser(email));
    history.push('/');
  };
};

export default function createUserReducer(state = '', action) {
  switch (action.type) {
    case CREATE_USER:
      return action.email;
    default:
      return state;
  }
}
