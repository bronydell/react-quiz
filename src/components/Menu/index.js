import React from 'react'
import Button from 'src/components/Button'

import { Container, RowWrapper } from './styles'

class Menu extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== this.props.user) {
      this.props.getProgress()
      return
    }
    if (nextProps.progress) {
      if (nextProps.quiz != null) {
        this.props.navigation.navigate('Quiz')
        this.props.setError('Loaded latest save')
      }
    }
  }

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
    if (this.props.user == null) {
      this.props.setError('To use editor, please, sign in')
      return
    }
    if (!this.props.user.emailVerified) {
      this.props.setError('To use editor, please confirm your email')
      return
    }
    this.props.navigation.navigate('MyQuizzes')
  }

  onProfile = () => {
    this.props.navigation.navigate('Profile')
  }
}

export default Menu
