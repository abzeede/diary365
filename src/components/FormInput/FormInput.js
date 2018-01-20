import React from 'react'
import { withFormsy } from 'formsy-react'
import { Input } from 'material-ui'

const FormInput = (props) => (
  <Input value={props.getValue()} onChange={(e) => props.setValue(e.target.value)} {...props} />
)

export default withFormsy(FormInput)
