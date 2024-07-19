import axios from 'axios';

// Action Types
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAIL = 'FETCH_POSTS_FAIL';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_FAIL = 'CREATE_POST_FAIL';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAIL = 'UPDATE_POST_FAIL';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAIL = 'DELETE_POST_FAIL';

// Fetch Posts Action
export const fetchPosts = () => dispatch => {
  axios.get('/api/posts')
    .then(res => {
      dispatch({
        type: FETCH_POSTS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_POSTS_FAIL,
        payload: err.response.data
      });
    });
};

// Create Post Action
export const createPost = postData => dispatch => {
  axios.post('/api/posts', postData)
    .then(res => {
      dispatch({
        type: CREATE_POST_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: CREATE_POST_FAIL,
        payload: err.response.data
      });
    });
};

// Update Post Action
export const updatePost = (postId, updatedPostData) => dispatch => {
  axios.put(`/api/posts/${postId}`, updatedPostData)
    .then(res => {
      dispatch({
        type: UPDATE_POST_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: UPDATE_POST_FAIL,
        payload: err.response.data
      });
    });
};

// Delete Post Action
export const deletePost = postId => dispatch => {
  axios.delete(`/api/posts/${postId}`)
    .then(res => {
      dispatch({
        type: DELETE_POST_SUCCESS,
        payload: postId
      });
    })
    .catch(err => {
      dispatch({
        type: DELETE_POST_FAIL,
        payload: err.response.data
      });
    });
};
