import { createStore, applyMiddleware, combineReducers } from 'redux';
import itinerator from '../reducers/index';
import {reducer as formReducer} from 'redux-form'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    itinerator,
    form: formReducer
  })


let store = createStore(
    rootReducer, 
    applyMiddleware(thunk)
    );

export default store;

