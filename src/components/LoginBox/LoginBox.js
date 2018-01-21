import React from 'react'
import { Button } from 'material-ui'
import { bool, func, shape } from 'prop-types'
import Form from 'formsy-react'
import styled from 'styled-components'
import withAuth from 'hocs/withAuth'
import FormInput from 'components/FormInput'

const Container = styled.div`
  background: white;
  width: 45%;
  min-width: 350px;
  padding:  0 25px 25px;
  text-align: center;
  text-transform: uppercase;
  transform: skew(25deg, -15deg);
  outline: solid 15px #8e8e8e;
  transition: 0.25s ease-in-out;
  
  @media (max-width: 768px) {
    transform: none;
    outline: none;
  }

  .title {
    font-size: 56px;
  }
  .answer {
    margin: 5px 0 30px 0;
  }
`

const LoginBox = ({ authStatus, onLogin }) => {
  return (
    <Container>
      <Form onSubmit={onLogin}>
        <h1 className="title">diary365 (beta)</h1>
        <h3 className="question">who are you ?</h3>
        <p className="answer">i'm <FormInput name="username" />.</p>
        <h3 className="question">how can i believe you ?</h3>
        <p className="answer">alright! i have the password, only you and i know and it is <FormInput name="password" type="password" />.</p>
        <div>
          <Button className="submit-btn" type="submit">{authStatus.isRequest ? 'checking...' : 'enter'}</Button>
        </div>
      </Form>
    </Container>
  )
}

LoginBox.propTypes = {
  isAuth: bool,
  authStatus: shape({
    isRequest: bool,
    isSuccess: bool,
    isFailure: bool,
  }),
  onLogin: func,
}

export default withAuth(LoginBox)