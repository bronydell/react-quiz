import React from 'react'
import PropTypes from 'prop-types'

import { COLOR_TITLE_TEXT } from 'src/lib/cssvars'
import { Text } from './styles'

class PlainText extends React.Component {
  render() {
    return pug`
      Text(color=this.props.color)= this.props.children
    `
  }
}

PlainText.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
}

PlainText.defaultProps = {
  children: '',
  color: COLOR_TITLE_TEXT,
}

export default PlainText
