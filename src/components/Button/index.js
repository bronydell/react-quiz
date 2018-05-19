import React from 'react'
import PropTypes from 'prop-types'

import {
  COLOR_PRIMARY_BUTTON_SHADOW,
  COLOR_PRIMARY_BUTTON,
  COLOR_DISABLED_BUTTON,
  COLOR_DISABLED_SHADOW_BUTTON,
} from 'src/lib/cssvars'
import { Container, Text } from './styles'

class Button extends React.Component {
  render() {
    const primaryColor = this.props.disabled ? COLOR_DISABLED_BUTTON : this.props.primaryColor
    const shadowColor = this.props.disabled ? COLOR_DISABLED_SHADOW_BUTTON : this.props.shadowColor
    return pug`
      Container(
        disabled=this.props.disabled
        onPress=this.props.onPress
        color=primaryColor
        underlayColor=shadowColor
      )
        Text= this.props.children
    `
  }
}

Button.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.string,
  primaryColor: PropTypes.string,
  shadowColor: PropTypes.string,
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  onPress: () => {},
  children: '',
  disabled: false,
  primaryColor: COLOR_PRIMARY_BUTTON,
  shadowColor: COLOR_PRIMARY_BUTTON_SHADOW,
}

export default Button
