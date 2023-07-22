import React from 'react'

const RegisterContext = React.createContext({
  isRegistered: false,
  onRegister: () => {},
  inputName: '',
  inputTopic: '',
})

export default RegisterContext
