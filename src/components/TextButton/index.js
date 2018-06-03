import React from 'react'
import PropTypes from 'prop-types'
import Title from 'src/components/Title'
import { Container } from './styles'

class Button extends React.Component {
  render() {
    return pug`
      Container(
        onPress=this.onPress
      )
        Title= this.props.children
    `
  }

  onPress = () => this.props.onPress()
}

Button.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.string,
  disabled: PropTypes.bool,
  debounced: PropTypes.bool,
}

Button.defaultProps = {
  onPress: () => {},
  children: '',
  disabled: false,
  debounced: true,
}

export default Button
