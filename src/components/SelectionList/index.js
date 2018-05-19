import React from 'react'
import PropTypes from 'prop-types'
import { FlatList } from 'react-native'

import { Separator } from './styles'

class SelectionList extends React.Component {
  render() {
    return pug`
      FlatList(
        ...this.props
        extraData=this.props
        data=this.props.data
        renderItem=this.renderItem
      )
    `
  }

  renderItem = props => React.createElement(
    this.props.itemComponent,
    {
      id: props.item.key,
      onPress: this.props.onItemPress,
      onChangeData: this.props.onChangeData,
      title: props.item.title,
      tickIcon: null,
      selected: this.isItemSelected(props.item),
    },
  )

  isItemSelected = item => this.props.selected.includes(item.key)
}

SelectionList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
  })),
  selected: PropTypes.arrayOf(PropTypes.string),
  onItemPress: PropTypes.func,
  onChangeData: PropTypes.func,
  itemComponent: PropTypes.func,
  ItemSeparatorComponent: PropTypes.func,
}

SelectionList.defaultProps = {
  data: [],
  selected: [],
  onItemPress: () => {},
  onChangeData: () => {},
  itemComponent: null,
  ItemSeparatorComponent: null,
}

export default SelectionList
