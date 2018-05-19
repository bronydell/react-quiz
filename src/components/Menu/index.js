import React from 'react'
import Button from 'src/components/Button'

import { Container, RowWrapper } from './styles'

class Menu extends React.Component {
  render() {
    return pug`
      Container
        RowWrapper
          Button(onPress=this.onCatalog) Explore Quizzes
        RowWrapper
          Button(onPress=this.onMyQuizList) Create Quiz
        RowWrapper
          Button(onPress=this.onProfile) Profile
    `
  }

  onCatalog = () => {
    this.props.navigation.navigate('QuizCatalog')
  }

  onMyQuizList = () => {
    this.props.navigation.navigate('MyQuizzes')
  }

  onProfile = () => {
    this.props.navigation.navigate('Profile')
  }
}

export default Menu
