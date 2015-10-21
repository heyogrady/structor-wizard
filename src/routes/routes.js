'use strict';

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';
import MainPage from './MainPage.js';
import ProjectDetailsPage from './ProjectDetailsPage.js';

export default function() {
    const history = createHistory();
    return (
        <Router history={ history }>
            <Route path="/" component="div">
                <IndexRoute component={ MainPage } />
                <Route path="/home" component={ MainPage } />
                <Route path="/details/:projectId" component={ ProjectDetailsPage } />
            </Route>
        </Router>
        );
}