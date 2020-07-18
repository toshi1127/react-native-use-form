import React from 'react'
import { Text, TextInput, TextInputProps, View } from 'react-native'

type Props = TextInputProps & {
  label?: string
  helperText?: string
  error?: boolean
}

export const TextField: React.FC<Props> = (props: Props) => {
  const {
    label = '',
    helperText = '',
    error = false,
    style,
    ...restProps
  } = props

  return (
    <View>
      {!!label.length && <Text>{label}</Text>}
      <TextInput
        autoCapitalize="none"
        {...restProps}
      />
      {!!helperText.length && (
        <Text>{helperText}</Text>
      )}
    </View>
  )
}
