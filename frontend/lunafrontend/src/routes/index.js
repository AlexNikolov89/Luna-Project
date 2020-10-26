import React from 'react'
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import Homepage from '../components/homepage/Homepage';


export const Routes = () => {
    return (
        <BrowserRouter>
        <Router>
            <Switch>
                <Route path='/home' component={Homepage} exact />
            </Switch>
        </Router>
        </BrowserRouter>
    )
}