export const isAuth = ({ auth }) => auth.status === 'success'
export const authStatus = ({ auth: { status } }) => ({
  isRequest: status === 'request',
  isSuccess: status === 'success',
  isFailure: status === 'failure',
})
