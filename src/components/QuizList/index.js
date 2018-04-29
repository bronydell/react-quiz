import React from 'react'
import { FlatList } from 'react-native'
import PropTypes from 'prop-types'

import Item from './Item'

class QuizList extends React.Component {
  render() {
    return pug`
      FlatList(
        data=this.props.data
        renderItem=this.renderItem
      )
    `
  }
  renderItem = ({ item }) => pug`
      Item(
        item=item
        onPress=this.props.onItemPress
      )
    `
}

QuizList.propTypes = {
  onItemPress: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object),
}

QuizList.defaultProps = {
  onItemPress: () => {},
  data: [],
}

export default QuizList
