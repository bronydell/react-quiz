import React from 'react'
import { FlatList } from 'react-native'
import PropTypes from 'prop-types'

import Item from './Item'

class QuizList extends React.Component {
  render() {
    return pug`
      FlatList(
        data=this.props.data
        extraData=this.props
        renderItem=this.renderItem
        keyExtractor=this.keyExtractor
      )
    `
  }
  keyExtractor = (item, index) => index
  renderItem = ({ item, index }) => pug`
        Item(
          item=item
          id=index
          onPress=this.props.onItemPress
          onDelete=this.props.onItemDelete
        )
      `
}

QuizList.propTypes = {
  onItemPress: PropTypes.func,
  onItemDelete: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object),
}

QuizList.defaultProps = {
  onItemPress: () => {},
  onItemDelete: () => {},
  data: [],
}

export default QuizList
