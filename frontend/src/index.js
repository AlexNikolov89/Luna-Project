import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { Routes } from './routes'
import { setToken } from './store/actions/authAction'

const token = localStorage.getItem("token");
store.dispatch(setToken(token));



ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Switch>
          <Routes />
        </Switch>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

