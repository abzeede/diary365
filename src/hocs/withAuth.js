import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { onLogin } from 'store/auth'
import { authStatus, isAuth } from 'selectors/auth'

export default (WrappedComponent) => {
  class AuthComponent extends React.Component {
    render () {
      const { isAuth, authStatus, onLogin } = this.props
      return (
        <WrappedComponent
          isAuth={isAuth}
          authStatus={authStatus}
          onLogin={onLogin}
          {...this.props}
        />
      )
    }
  }

  const mapStateToProps = (state) => ({
    isAuth: isAuth(state),
    authStatus: authStatus(state),
  })
  const mapDispatchToProps = (dispatch) => bindActionCreators({
    onLogin,
  }, dispatch)

  return connect(mapStateToProps, mapDispatchToProps)(AuthComponent)
}
