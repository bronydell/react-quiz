import React from 'react'
import { TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import PlainText from 'src/components/PlainText'

import { COLOR_RED_TEXT } from 'src/lib/cssvars'

import { Container } from './styles'

class QuizItem extends React.Component {
  render() {
    return pug`
      Container
        TouchableOpacity(onPress=this.onPress)
          PlainText= this.props.item.question
        TouchableOpacity(onPress=this.onDelete)
          PlainText(color=COLOR_RED_TEXT)= "X"
    `
  }

  onPress = () => {
    this.props.onPress(this.props.id, this.props.item)
  }

  onDelete = () => {
    this.props.onDelete(this.props.id, this.props.item)
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
