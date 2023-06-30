import {
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
  } from './user.types.js';
  
  const initialState = {
    user: null,
    error: null
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case REGISTER_SUCCESS:
        return {
          ...state,
          user: action.payload,
          error: null
        };
      case REGISTER_FAILURE:
        return {
          ...state,
          user: null,
          error: action.payload
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          user: action.payload,
          error: null
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          user: null,
          error: action.payload
        };
      case LOGOUT:
        return {
          ...state,
          user: null,
          error: null
        };
      default:
        return state;
    }
  };
  
  export default userReducer;