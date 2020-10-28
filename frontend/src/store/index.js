import { createStore } from 'redux';
import { lunaReducer } from './reducer';


export const store = createStore(lunaReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());