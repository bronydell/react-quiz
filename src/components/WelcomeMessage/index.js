import React from 'react'
import { View, Button } from 'react-native'

import { Greeting } from './styles'

class WelcomeMessage extends React.Component {
  render() {
    return pug`
      View
        Greeting(color=this.props.color) Hello World!

        Button(
          title="Change Color"
          onPress=this.props.action
        )
    `
  }
}

WelcomeMessage.defaultProps = {
  color: 'red',
}

export default WelcomeMessage
