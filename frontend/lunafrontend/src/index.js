import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './index.css';
import { Login } from './components/LunaLogin';
import { Test } from './components/test_login';
import reportWebVitals from './reportWebVitals';
import { Registration } from './components/Registration';
import Homepage  from './components/homepage/Homepage';
import SearchPage from './components/Searchpage/SearchPage';
import ReviewsPage from './components/reviewsPage/ReviewsPage';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Login} />
        <Route exact={true} path="/registration" component={Registration} />
        <Route exact={true} path="/test" component={Test} />
        <Route exact={true} path="/homepage" component={Homepage} />
        <Route exact={true} path='/search' component={SearchPage} />
        <Route exact={true} path='/reviews' component={ReviewsPage} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

