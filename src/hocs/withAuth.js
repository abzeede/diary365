import React from 'react'

export default (WrappedComponent) => {
  class AuthComponent extends React.Component {
    state = {
      isAuth: false,
      authStatus: null,
    } // mock data

    componentDidMount() {
      // todo: fetch auth status
    }

    onLogin = ({ username, password }) => (
      this.setState({ isAuth: username === 'bank' && password === 'password' })
    ) // mock function

    render () {
      const { isAuth, authStatus } = this.state
      return (
        <WrappedComponent
          isAuth={isAuth}
          authStatus={authStatus}
          onLogin={this.onLogin}
          {...this.props}
        />
      )
    }
  }

  return AuthComponent
}
