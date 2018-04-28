import React from 'react'
import PropTypes from 'prop-types'

import { COLOR_PRIMARY_BUTTON_SHADOW } from 'src/lib/cssvars'
import { Container, Text } from './styles'

class Button extends React.Component {
  render() {
    return pug`
      Container(
        onPress=this.props.onPress
        underlayColor=COLOR_PRIMARY_BUTTON_SHADOW
      )
        Text= this.props.children
    `
  }
}

Button.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.string,
}

Button.defaultProps = {
  onPress: () => {},
  children: '',
}

export default Button
