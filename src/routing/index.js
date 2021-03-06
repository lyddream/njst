import React from 'react'
import {Redirect, Route} from 'react-router';
import {Home} from '../components';
import {App} from '../containers';
import createBrowserHistory from 'history/createBrowserHistory'

export const history = createBrowserHistory();

export const Routing =
    <App>
        <Route path="/" component={Home}/>
        <Redirect from="/*" to="/"/>
    </App>

