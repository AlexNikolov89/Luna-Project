import { createStore, applyMiddleware } from 'redux';
import { lunaReducer } from './reducer';
import thunk from 'redux-thunk';


export const store = createStore(lunaReducer,  applyMiddleware(thunk));