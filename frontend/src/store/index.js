import { createStore } from 'redux';
import thunk from 'redux-thunk';
import { applyMiddleware } from "redux";

export const store = createStore(reducers, applyMiddleware(thunk));
