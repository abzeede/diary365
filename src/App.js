import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom'
import './App.css';

const Home = () => <div style={{ color: 'red' }}>HOME</div>
const About = () => <div style={{ color: 'red' }}>About</div>
const Topics = () => <div style={{ color: 'red' }}>Home</div>
const LoginPage = () => <h1> PLEASE LOGIN!!! </h1>
let isAuth = false

const PrivateRoute = ({ component: Component, ...rest }) => (
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
)


class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/"><button>Home</button></Link>
        <Link to="/about"><button>about</button></Link>
        <Link to="/topics"><button>topics</button></Link>
        <button onClick={() => isAuth = !isAuth}>{isAuth ? 'LOG OFF' : 'LOGIN'}</button>
        <Route path="/login" component={LoginPage} />
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute path="/about" component={About} />
        <PrivateRoute path="/topics" component={Topics} />
      </div>
    );
  }
}

export default App;
