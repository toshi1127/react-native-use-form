# react-native-use-form
A form validation library implemented by React Hooks.
Easy to implement form state management, validation and data submission.

## How to install
`npm install react-native-use-form` or `yarn add react-native-use-form`

## How to use

```
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
```