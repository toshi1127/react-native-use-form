import { useState, useEffect } from 'react'

type useFormType = <T>(
  value: T,
  callback: (arg?: any) => void,
  validate: any
) => {
  handleChange: (text: string, name: string) => void
  handleSubmit: () => void
  values: T
  errors: Partial<T>
}

const useForm: useFormType = (initial, callback, validate) => {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback()
    }
  }, [errors])

  const handleSubmit = () => {
    setErrors(validate(values))
    setIsSubmitting(true)
  }

  const handleChange = (text: string, name: string) => {
    setValues((values) => ({ ...values, [name]: text }))
  }

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
}

export default useForm
