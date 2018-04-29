import React from 'react'
import { FlatList } from 'react-native'
import PropTypes from 'prop-types'

import Item from './Item'

class Keyboard extends React.Component {
  render() {
    return pug`
      FlatList(
        extraData=this.props.pressedButton
        data=this.props.options
        scrollEnabled=false
        renderItem=this.renderItem
        keyExtractor=this.keyExtractor
      )
    `
  }
  keyExtractor = item => item.id
  renderItem = ({ item }) => {
    let shouldBeShown = false
    if (this.props.pressedButton && (this.props.pressedButton === item.id || item.isAnswer)) {
      shouldBeShown = true
    }
    return pug`
          Item(
            item=item
            onPress=this.props.onItemPress
            shouldBeShown=shouldBeShown
          )
        `
  }
}

Keyboard.propTypes = {
  onItemPress: PropTypes.func,
  pressedButton: PropTypes.number,
  options: PropTypes.arrayOf(PropTypes.object),
}

Keyboard.defaultProps = {
  onItemPress: () => {},
  pressedButton: null,
  options: [],
}

export default Keyboard
