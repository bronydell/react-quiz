import React from 'react'
import Button from 'src/components/Button'
import Title from 'src/components/Title'
import InputField from 'src/components/InputField'

import {
  Container,
  RowWrapper,
  LoginWrapper,
  TitleWrapper,
  FormWrapper,
  Content,
} from './styles'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  render() {
    return pug`
      Container(behavior="padding")
        Content
          TitleWrapper
            Title Login
          FormWrapper
            RowWrapper
              LoginWrapper
                InputField(
                  text=this.state.email
                  onChange=this.onChangeEmail
                  keyboardType='email-address'
                  autoCapitalize='none'
                ) Email
            RowWrapper
              LoginWrapper
                InputField(
                  text=this.state.password
                  onChange=this.onChangePassword
                  autoCapitalize='none'
                  isPassword
                ) Password
            RowWrapper
              Button(
                onPress=this.onLogin
              ) Login
          RowWrapper
            Button(
              onPress=this.toRegister
            ) I don't have an account
    `
  }

  onChangePassword = (text) => {
    this.setState({
      password: text,
    })
  }

  onLogin = () => {
    this.props.login(this.state.email, this.state.password)
  }

  toRegister = () => {
    this.props.setScreen('register')
  }

  onChangeEmail = (text) => {
    this.setState({
      email: text.toLowerCase(),
    })
  }
}

export default Login
