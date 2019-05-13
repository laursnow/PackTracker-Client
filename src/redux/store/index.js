import { createStore, applyMiddleware, combineReducers } from 'redux';
import itinerator from '../reducers/index';
import auth from '../reducers/auth'
import {reducer as formReducer} from 'redux-form'
import thunk from 'redux-thunk';
import {loadAuthToken} from '../local-storage';
import {setAuthToken, refreshAuthToken} from '../actions/auth';

const rootReducer = combineReducers({
    itinerator,
    auth,
    form: formReducer
  })


const store = createStore(
    rootReducer, 
    applyMiddleware(thunk)
    );

export default store;


const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}


