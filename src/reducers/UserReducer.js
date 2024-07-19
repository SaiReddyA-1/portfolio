// Initial state for users
const initialState = {
  users: [],
  loading: false,
  error: null
};

// Action types
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

// Reducer function
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
