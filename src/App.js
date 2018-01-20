import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import 'normalize.css'
import withAuth from './hocs/withAuth'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'

const PrivateRoute = withAuth(({ component: Component, isAuth, authStatus, ...rest }) => (
  <Route {...rest} render={props => (
     isAuth ? (
        <Component {...props} />
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
      )
  )}/>
))

const App = () => (
  <div className="app">
    <Route path="/login" component={LoginPage} />
    <PrivateRoute exact path="/" component={HomePage} />
  </div>
)

export default App
