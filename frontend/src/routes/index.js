import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from '../components/homepage/Homepage';
import { Login } from '../components/LunaLogin';
import { Registration } from '../components/Registration';
import { Verification } from '../components/Verification';
import { MessageRegistration } from '../components/MessageRegistration';
import SearchPage from '../components/Searchpage/SearchPage';
import ReviewsPage from '../components/reviewsPage/ReviewsPage';
import UserPage from '../components/usersPage/UsersPage';

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact={true} path="/" component={Login} />
                <Route exact={true} path="/registration" component={Registration} />
                <Route exact={true} path="/regmessage" component={MessageRegistration} />
                <Route exact={true} path="/verification" component={Verification} />
                <Route exact={true} path="/regmessage" component={MessageRegistration} />
                <Route exact={true} path="/homepage" component={Homepage} />
                <Route exact={true} path='/search' component={SearchPage} />
                <Route exact={true} path='/search/reviews' component={ReviewsPage} />
                <Route exact={true} path='/search/users' component={UserPage} />
            </Switch>
        </Router>
    )
}