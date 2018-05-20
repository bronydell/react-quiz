import React from 'react'
import PropTypes from 'prop-types'
import PlainText from 'src/components/PlainText'
import InputField from 'src/components/InputField'

import { COLOR_GREEN_TEXT, COLOR_RED_TEXT } from 'src/lib/cssvars'
import {
  Container,
  IconPlaceholder,
  DeleteButtonWrapper,
  InputFieldWrapper,
} from './styles'

class SelectionListTextItem extends React.Component {
  render() {
    return pug`
      Container
        IconPlaceholder(onPress=this.onPress)
          if this.props.selected
            PlainText(color=COLOR_GREEN_TEXT)= "A"
        InputFieldWrapper
          InputField(
            text=this.props.title
            onChange=this.onChangeTitle
          )= "Option text"
        DeleteButtonWrapper(onPress=this.onDelete)
          PlainText(color=COLOR_RED_TEXT)= "X"
    `
  }

  onPress = () => this.props.onPress(this.props.id)
  onChangeTitle = text => this.props.onChangeData({
    action: 'TITLE_EDIT',
    id: this.props.id,
    text,
  })

  onDelete = text => this.props.onChangeData({
    action: 'DELETE_ROW',
    id: this.props.id,
    text,
  })
}

SelectionListTextItem.propTypes = {
  onPress: PropTypes.func.isRequired,
  onChangeData: PropTypes.func,
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  selected: PropTypes.bool,
}

SelectionListTextItem.defaultProps = {
  title: '',
  onChangeData: () => {},
  selected: false,
}

export default SelectionListTextItem
