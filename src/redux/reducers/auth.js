  
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
    authToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWNjZmY4NTljNGZjOTI0YjMwOTM4MzY3IiwidXNlcm5hbWUiOiJ0ZXN0IiwiZW1haWwiOiJsYXVyZW5AbGF1cmVuLmNvbSIsImF1dGhvcl9vZiI6WyI1Y2NmZjg3N2M0ZmM5MjRiMzA5MzgzNjgiLCI1Y2NmZjg4YmM0ZmM5MjRiMzA5MzgzNjkiLCI1Y2QxMjFiOGIxMTZlYzQ1NGMxMDdkMGQiLCI1Y2Q5M2VlOGQxMjA4NTE4OTA5M2ViNjQiXX0sImlhdCI6MTU1Nzc0MTU3MiwiZXhwIjoxNTU4MzQ2MzcyLCJzdWIiOiJ0ZXN0In0.9aSsZgC91xwTXUk0smQ7cJJ7J5Kxki3imjAVrAYCi7M",
    currentUser: 'test'
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
  
  
  