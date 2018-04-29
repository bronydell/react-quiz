import React from 'react'
import PropTypes from 'prop-types'

import {
  COLOR_PRIMARY_BUTTON_SHADOW,
  COLOR_PRIMARY_BUTTON,
} from 'src/lib/cssvars'
import { Container, Text } from './styles'

class Button extends React.Component {
  render() {
    return pug`
      Container(
        onPress=this.props.onPress
        color=this.props.primaryColor
        underlayColor=this.props.shadowColor
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
}

Button.defaultProps = {
  onPress: () => {},
  children: '',
  primaryColor: COLOR_PRIMARY_BUTTON,
  shadowColor: COLOR_PRIMARY_BUTTON_SHADOW,
}

export default Button
