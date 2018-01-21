import React from 'react';
import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import 'normalize.css'
import reduxStore from 'store'
import withAuth from 'hocs/withAuth'
import LoginPage from 'pages/LoginPage'
import HomePage from 'pages/HomePage'
// import {onLogin} from 'store/auth'

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

const store = createStore(
  reduxStore,
  composeWithDevTools(applyMiddleware(thunk))
)

// store.dispatch(onLogin({ username: 'bank', password: 'password' }))

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/login" component={LoginPage} />
          <PrivateRoute exact path="/" component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
)

export default App
