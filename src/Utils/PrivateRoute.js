import React from 'react'
import { Route, Redirect } from 'react-router-dom'


function PrivateRoute({ children, ...rest }) {
    const token = window.localStorage.getItem('auth_token')
    return (
        <Route
            {...rest}
            render={({ location }) =>
                token ? (
                    <div>
                        {children}
                    </div>
                ) : (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}

export default PrivateRoute