import axios from 'axios';
import jwt_decode from 'jwt-decode';

// Action Types
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';

// Register User Action
export const register = (userData, history) => dispatch => {
  axios.post('/api/users/register', userData)
    .then(res => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
      history.push('/login'); // Redirect to login page upon successful registration
    })
    .catch(err => {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data
      });
    });
};

// Login - Get User Token
export const login = userData => dispatch => {
  axios.post('/api/users/login', userData)
    .then(res => {
      // Save token to localStorage
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data
      });
    });
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: LOGIN_SUCCESS,
    payload: decoded
  };
};

// Log user out
export const logout = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Set current user to empty object which will set isAuthenticated to false
  dispatch({
    type: LOGOUT
  });
};
