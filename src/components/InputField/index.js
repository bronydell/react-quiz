import React from 'react'
import PropTypes from 'prop-types'

import { COLOR_PLACEHOLDER_COLOR } from 'src/lib/cssvars'

import { TextInput, TextInputContainer } from './styles'

class InputField extends React.Component {
  render() {
    return pug`
      TextInputContainer
        TextInput(
          placeholder=this.props.children
          underlineColorAndroid="transparent"
          placeholderTextColor=COLOR_PLACEHOLDER_COLOR
          autoCorrect=this.props.autoCorrect
          onChangeText=this.textChange
          autoCapitalize=this.props.autoCapitalize
          keyboardType=this.props.keyboardType
          secureTextEntry=this.props.isPassword
        )
    `
  }

  textChange = (text) => {
    this.props.onChange(text)
  }
}

InputField.propTypes = {
  autoCorrect: PropTypes.bool,
  isPassword: PropTypes.bool,
  text: PropTypes.string,
  autoCapitalize: PropTypes.string,
  keyboardType: PropTypes.string,
  children: PropTypes.string,
  onChange: PropTypes.func,
}

InputField.defaultProps = {
  autoCorrect: false,
  autoCapitalize: 'sentences',
  keyboardType: 'default',
  isPassword: false,
  text: '',
  children: '',
  onChange: () => {},
}

export default InputField
