import React from 'react'
import PropTypes from 'prop-types'
import PlainText from 'src/components/PlainText'
import InputField from 'src/components/InputField'

import { COLOR_GREEN_TEXT } from 'src/lib/cssvars'
import {
  Container,
  IconPlaceholder,
} from './styles'

class SelectionListTextItem extends React.Component {
  render() {
    console.log(this.props.title)
    return pug`
      Container
        IconPlaceholder(onPress=this.onPress)
          if this.props.selected
            PlainText(color=COLOR_GREEN_TEXT)= "A"
        InputField(
          text=this.props.title
          onChange=this.onChangeTitle
        )= "Option text"
    `
  }

  onPress = () => this.props.onPress(this.props.id)
  onChangeTitle = text => this.props.onChangeData({
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
