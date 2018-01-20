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

    render () {
      const { isAuth, authStatus } = this.state
      return (
        <WrappedComponent
          isAuth={isAuth}
          authStatus={authStatus}
          {...this.props}
        />
      )
    }
  }

  return AuthComponent
}
