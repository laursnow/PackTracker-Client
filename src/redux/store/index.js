import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import packApp from "../reducers/index";
import auth from "../reducers/auth";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";
import { loadAuthToken } from "../local-storage";
import { setAuthToken, refreshAuthToken } from "../actions/auth";

const rootReducer = combineReducers({
  packApp,
  auth,
  form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;

const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}
