import axios from 'axios';

// Action Types
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAIL = 'FETCH_USERS_FAIL';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAIL = 'UPDATE_USER_FAIL';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAIL = 'DELETE_USER_FAIL';

// Fetch Users Action
export const fetchUsers = () => dispatch => {
  axios.get('/api/users')
    .then(res => {
      dispatch({
        type: FETCH_USERS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_USERS_FAIL,
        payload: err.response.data
      });
    });
};

// Update User Action
export const updateUser = (userId, updatedUserData) => dispatch => {
  axios.put(`/api/users/${userId}`, updatedUserData)
    .then(res => {
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: UPDATE_USER_FAIL,
        payload: err.response.data
      });
    });
};

// Delete User Action
export const deleteUser = userId => dispatch => {
  axios.delete(`/api/users/${userId}`)
    .then(res => {
      dispatch({
        type: DELETE_USER_SUCCESS,
        payload: userId
      });
    })
    .catch(err => {
      dispatch({
        type: DELETE_USER_FAIL,
        payload: err.response.data
      });
    });
};
