import React from 'react'
import styled from 'styled-components'
import LoginBox from 'components/LoginBox'

const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #2c3e50;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const LoginPage = () => (
  <LoginPageContainer>
    <LoginBox />
  </LoginPageContainer>
)

export default LoginPage
