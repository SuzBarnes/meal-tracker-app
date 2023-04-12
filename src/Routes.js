import React from 'react';
import {BrowserRouter as Router, Link, Route, } from 'react-router-dom'

const routes = [];

const Routes = () => {
    <Router>
        <Link>
        {routes.map((route, index)=> (
            <Route 
            key={index}
            path={route.path}
            exact={route.exact}
            >
                <route.Component />
            </Route>
        ))}
        </Link>
    </Router>
}

export default Routes;