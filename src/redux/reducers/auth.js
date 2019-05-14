  
  import {
    AUTH_ERROR,
    AUTH_REQUEST,
    AUTH_SUCCESS,
    CLEAR_AUTH,
    SET_AUTH_TOKEN
  } from "../actions/auth";
  
  const initialState = {
    status: "",
    error: "",
    authToken: null,
    currentUser: null
  };

  
  function auth(state = initialState, action) {
    switch (action.type) {
      case SET_AUTH_TOKEN:
        return Object.assign({}, state, {
          authToken: action.authToken
        });
      case CLEAR_AUTH:
        return Object.assign({}, state, {
          authToken: null,
          currentUser: null
        });
      case AUTH_REQUEST:
        return Object.assign({}, state, {
          loading: true,
          error: null
        });
      case AUTH_ERROR:
        return Object.assign({}, state, {
          loading: false,
          error: action.error
        });
      case AUTH_SUCCESS: {
        return Object.assign({}, state, {
          loading: false,
          currentUser: action.currentUser
        });
      }
      default:
        return state;
    }
  }
  
  export default auth;
  
  
  