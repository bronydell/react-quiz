import React from 'react'
import PropTypes from 'prop-types'

import { Text } from './styles'

class PlainText extends React.Component {
  render() {
    return pug`
      Text= this.props.children
    `
  }
}

PlainText.propTypes = {
  children: PropTypes.string,
}

PlainText.defaultProps = {
  children: '',
}

export default PlainText
