import React from 'react'

import Popup from 'src/components/Popup'
import RegularText from 'src/components/PlainText'

class Error extends React.Component {
  render() {
    return pug`
      Popup(toggleModal=this.props.onClose)
        RegularText= this.props.text
    `
  }
}

export default Error
