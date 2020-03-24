import React, { useEffect } from 'react';
import Login from '../Login/Login'
import Home from '../Home/Home'
import { Route, useHistory, useLocation, Redirect } from 'react-router-dom'
import PrivateRoute from '../Utils/PrivateRoute'


function RouterApp() {
    const token = localStorage.getItem('auth_token')
    let location = useLocation()
    let history = useHistory()

    if (token && location.pathname === "/") {
        history.push('/home')
    }

    return (
        <div>
            <Route exact path='/'><Login /></Route>
            <PrivateRoute path='/home'><Home /></PrivateRoute>
        </div>
    )
}

export default RouterApp;