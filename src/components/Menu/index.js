import React from 'react'
import Button from 'src/components/Button'

import { Container, RowWrapper } from './styles'

class Menu extends React.Component {
  render() {
    return pug`
      Container
        RowWrapper
          Button(onPress=this.onCatalog) Explore Quizes
        RowWrapper
          Button(onPress=this.onProfile) Profile
    `
  }

  onCatalog = () => {
    console.log('onCatalog')
    this.props.navigation.navigate('QuizCatalog')
  }

  onProfile = () => {
    this.props.navigation.navigate('Profile')
  }
}

export default Menu
