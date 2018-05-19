import React from 'react'
import PropTypes from 'prop-types'
import SelectionList from 'src/containers/SelectionList'
import Item from './Item'

class OptionList extends React.Component {
  render() {
    return pug`
      SelectionList(
        ...this.props
        onChangeData=this.props.onChangeData
        itemComponent=Item
      )
    `
  }
}

OptionList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
  selected: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  onChangeData: PropTypes.func,
}

OptionList.defaultProps = {
  data: [],
  selected: [],
  onChange: () => {},
  onChangeData: () => {},
}

export default OptionList
