import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'

import SelectionList from 'src/components/SelectionList'

export const ALL_KEY = '__ALL__'

export const filterOutAllKey = key => key !== ALL_KEY

class SelectionListContainer extends React.Component {
  render() {
    return pug`
      SelectionList(
        ...this.props
        onItemPress=this.onItemPress
        onChangeData=this.onChangeData
      )
    `
  }

  onItemPress = (key) => {
    // When we select ALL_KEY in 'multiple' mode we should either select or
    // unselect all items (according to if ALL_KEY was selected)
    if (this.isMultipleMode() && key === ALL_KEY) {
      const nextSelected = this.props.selected.includes(ALL_KEY)
        ? []
        : this.getItemsKeys()

      return this.setSelected(nextSelected)
    }

    // When we select item in 'multiple' mode we should toggle it in array
    if (this.isMultipleMode()) {
      const nextSelected = this.props.selected.includes(key)
        ? _.without(this.props.selected, key)
        : [...this.props.selected, key]

      return this.setSelected(nextSelected)
    }

    return this.setSelected([key])
  }

  setSelected = (nextSelected) => {
    if (this.isMultipleMode()) {
      const nextSelectedNormalized = nextSelected.filter(filterOutAllKey)
      const itemsNormalized = this.getItemsKeys().filter(filterOutAllKey)

      // Add ALL_KEY if all items are selected
      if (nextSelectedNormalized.length === itemsNormalized.length) {
        return this.props.onChange(_.union(nextSelected, [ALL_KEY]))
      }

      // ...and remove ALL_KEY otherwise
      return this.props.onChange(_.without(nextSelected, ALL_KEY))
    }

    return this.props.onChange(nextSelected)
  }

  onChangeData = data => this.props.onChangeData(data)

  getItemsKeys = () => _.values(this.props.data).map(item => item.key)

  isMultipleMode = () => Boolean(this.props.multiple)
}

SelectionListContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
  })),
  onChange: PropTypes.func.isRequired,
  onChangeData: PropTypes.func,
  multiple: PropTypes.bool,
  selected: PropTypes.arrayOf(PropTypes.string),
}

SelectionListContainer.defaultProps = {
  multiple: false,
  onChangeData: () => {},
  data: [],
  selected: [],
}

export default SelectionListContainer
