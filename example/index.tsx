import { View, Button } from "react-native"
import React, { useCallback } from "react"
import useForm from "../src"
import { EMAIL_REGEXP, PASS_REGEXP } from "./constants"
import { TextField } from "./TextField"

interface FormData {
  email: string
  password: string
}
  
export default function validate(values: FormData) {
  const errors: Partial<FormData> = {}
  if (!values.email) {
    errors.email = 'error message'
  } else if (!EMAIL_REGEXP.test(values.email)) {
    errors.email = 'error message'
  }
  if (!values.password) {
    errors.password = 'error message'
  } else if (!PASS_REGEXP.test(values.password)) {
    errors.password =
      'error message'
  }
  return errors
}

export const LoginScreen: React.FC = () => {
  const loginReq = useCallback(() => {}, [])
  const { values, errors, handleChange, handleSubmit } = useForm(
    { email: '', password: '' },
    loginReq,
    validate
  )
  return (
    <View>
      <TextField
        value={values.email}
        error={!!errors.email}
        helperText={errors.email}
        onChangeText={useCallback(
          (text: string) => handleChange(text, 'email'),
          []
        )}
      />
      <TextField
        value={values.password}
        error={!!errors.password}
        helperText={errors.password}
        secureTextEntry
        onChangeText={useCallback(
          (text: string) => handleChange(text, 'password'),
          []
        )}
      />
      <Button title="Login"onPress={handleSubmit} />
    </View>
  )
}