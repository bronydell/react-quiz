import React from 'react'
import { Text } from 'react-native'
import { withNavigation } from 'react-navigation'

import Popup from './'

class DefaultRaw extends React.PureComponent {
  render() {
    return pug`
      Popup(
        toggleModal=this.back
      )
        Text I'm inside
    `
  }

  back = () => this.props.navigation.goBack()
}

export const Default = withNavigation(DefaultRaw)
