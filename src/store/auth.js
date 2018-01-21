import { combineReducers } from 'redux'

const LOGIN = {
  REQUEST: 'LOGIN_REQUEST',
  SUCCESS: 'LOGIN_SUCCESS',
  FAILURE: 'LOGIN_FAILURE',
}

// actions
export const onLogin = ({ username, password }) => (dispatch) => { // fake login
  dispatch({ type: LOGIN.REQUEST })
  setTimeout(() => {
    if (username === 'bank' && password === 'password') {
      return dispatch({ type: LOGIN.SUCCESS })
    }
    return dispatch({ type: LOGIN.FAILURE })
  },1500)
}

// reducers
const status = (state = '', action) => {
  switch (action.type) {
    case LOGIN.SUCCESS:
      return 'success'
    case LOGIN.REQUEST:
      return 'request'
    case LOGIN.FAILURE:
      return 'failure'
    default:
      return state
  }
}

export default combineReducers({
  status,
})
