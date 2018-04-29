import React from 'react'
import PropTypes from 'prop-types'
import Button from 'src/components/Button'
import {
  COLOR_SUCC_BUTTON,
  COLOR_SUCC_BUTTON_SHADOW,
  COLOR_ERR_BUTTON,
  COLOR_ERR_BUTTON_SHADOW,
} from 'src/lib/cssvars'
import { Content } from './styles'

class QuizItem extends React.Component {
  render() {
    let buttonColor = COLOR_ERR_BUTTON
    let buttonShadowColor = COLOR_ERR_BUTTON_SHADOW
    if (this.props.item.isAnswer) {
      buttonColor = COLOR_SUCC_BUTTON
      buttonShadowColor = COLOR_SUCC_BUTTON_SHADOW
    }
    return pug`
      Content
        if this.props.shouldBeShown
          Button(
            onPress=this.onPress
            primaryColor=buttonColor
            shadowColor=buttonShadowColor
          )= this.props.item.text
        else
          Button(
            onPress=this.onPress
          )= this.props.item.text
    `
  }

  onPress = () => {
    this.props.onPress(this.props.item)
  }
}

QuizItem.propTypes = {
  onPress: PropTypes.func,
  shouldBeShown: PropTypes.bool,
  item: PropTypes.shape({}),
}

QuizItem.defaultProps = {
  onPress: () => {},
  item: null,
  shouldBeShown: false,
}

export default QuizItem
