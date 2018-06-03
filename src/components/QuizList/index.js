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
        onRefresh=this.props.onRefresh
        refreshing=this.props.refreshing
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
  onRefresh: PropTypes.func,
  refreshing: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.object),
}

QuizList.defaultProps = {
  onItemPress: () => {},
  onRefresh: () => {},
  refreshing: false,
  data: [],
}

export default QuizList
