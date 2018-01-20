import React from 'react'
import { Button, Input } from 'material-ui'

const LoginPage = () => (
  <div>
    <h1>DIARY365</h1>
    <h3>HOW ARE YOU?</h3>
    <p>I'M <Input name="username" /></p>
    <h3>WHAT'S YOUR PASSWORD</h3>
    <p><Input name="password" /></p>
    <Button>LET ME IN</Button>
  </div>
)

export default LoginPage
