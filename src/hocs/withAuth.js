import React from 'react'
import { compose } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { onLogin } from 'store/auth'
import { authStatus, isAuth } from 'selectors/auth'

export default (WrappedComponent) => {
  class AuthComponent extends React.Component {
    componentDidMount() {
      this.checkAuthStatusAndRedirect(this.props)
    }
    componentWillReceiveProps(nextProps) {
      this.checkAuthStatusAndRedirect(nextProps)
    }
    checkAuthStatusAndRedirect = ({ isAuth, location, history }) => {
      if (isAuth && location.pathname === '/login') {
        history.replace(location.state.from.pathname || '/')
      }
    }
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

  return compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
  )(AuthComponent)
}
