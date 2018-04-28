import React from 'react'
import Title from 'src/components/Title'
import Button from 'src/components/Button'
import Text from 'src/components/PlainText'

import {
  Container,
  Content,
  DetailsWrapper,
  TitleWrapper,
} from './styles'

class QuizDetails extends React.Component {
  render() {
    const { params } = this.props.navigation.state
    const quiz = params ? params.quiz : null
    return pug`
      Container
        TitleWrapper
          Title= "Quiz details"
        Content
          DetailsWrapper
            Text= "Description: "+quiz.description
            Text= "Author: Somebody once told me"
          Button(onPress=this.onStart)= "Start test"
    `
  }

  onStart = () => {
    console.log('Start quiz!')
  }
}

export default QuizDetails
