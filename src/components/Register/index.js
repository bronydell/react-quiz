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

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      passwordRepeat: '',
    }
  }

  render() {
    return pug`
      Container(behavior="padding")
        Content
          TitleWrapper
            Title Register
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
              LoginWrapper
                InputField(
                  text=this.state.passwordRepeat
                  onChange=this.onChangeRepeatPassword
                  autoCapitalize='none'
                  isPassword
                ) Repeat password
            RowWrapper
              Button(onPress=this.onRegister) Register
          RowWrapper
            Button(onPress=this.toLogin) Oh... Wait. I have account!
    `
  }

  onChangePassword = (text) => {
    this.setState({
      password: text,
    })
  }

  onRegister = () => {
    this.props.register(this.state.email, this.state.password)
  }

  toLogin = () => {
    this.props.setScreen('login')
  }

  onChangeRepeatPassword = (text) => {
    this.setState({
      passwordRepeat: text,
    })
  }

  onChangeEmail = (text) => {
    this.setState({
      email: text.toLowerCase(),
    })
  }
}

export default Register
