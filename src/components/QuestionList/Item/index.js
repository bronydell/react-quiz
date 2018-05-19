import React from 'react'
import PropTypes from 'prop-types'

import { Container, Title } from './styles'

class QuizItem extends React.Component {
  render() {
    return pug`
      Container(onPress=this.onPress)
        Title= this.props.item.question
    `
  }

  onPress = () => {
    this.props.onPress(this.props.item)
  }
}

QuizItem.propTypes = {
  onPress: PropTypes.func,
  item: PropTypes.shape({}),
}

QuizItem.defaultProps = {
  onPress: () => {},
  item: null,
}

export default QuizItem
