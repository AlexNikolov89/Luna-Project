import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Homepage from '../components/homepage/Homepage';
import { Login } from '../components/LunaLogin';
import { Registration } from '../components/Registration';
import { Verification } from '../components/Verification';
import { MessageRegistration } from '../components/MessageRegistration';
import { Test } from '../components/test_login';

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact={true} path="/" component={Login} />
                <Route exact={true} path="/registration" component={Registration} />
                <Route exact={true} path="/regmessage" component={MessageRegistration} />
                <Route exact={true} path="/verification" component={Verification} />
                <Route exact={true} path="/regmessage" component={MessageRegistration} />
                <Route exact={true} path="/test" component={Test} />
                {/* <Route exact={true} path="/homepage" component={Homepage} /> */}
            </Switch>
        </Router>
    )
}