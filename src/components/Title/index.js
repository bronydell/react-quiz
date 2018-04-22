import React from 'react'
import PropTypes from 'prop-types'

import { Text } from './styles'

class Title extends React.Component {
  render() {
    return pug`
      Text= this.props.children
    `
  }
}

Title.propTypes = {
  children: PropTypes.string,
}

Title.defaultProps = {
  children: '',
}

export default Title
