import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home  from './views/home'
import SignInPage from './views/sign-in-page'
import SignUpPage from './views/sign-up-page'
import Navbar from './components/navbar'
import ProtectedRoute from './components/protected-route'
import Dashboard from './views/dashboard'
export const Root = () => {
    return (
        <div>
            <Navbar />
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/sign-in' component={SignInPage} />
                    <Route exact path='/sign-up' component={SignUpPage} />
                    <ProtectedRoute exact path='/dashboard' component={Dashboard} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
