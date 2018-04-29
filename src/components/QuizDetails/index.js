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
  constructor(props) {
    super(props)
    const { params } = this.props.navigation.state
    this.state = {
      quiz: params ? params.quiz : null,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.quiz) {
      this.props.navigation.navigate('Quiz')
    }
  }

  render() {
    return pug`
      Container
        TitleWrapper
          Title= "Quiz details"
        Content
          DetailsWrapper
            Text= "Description: "+this.state.quiz.description
            Text= "Author: Somebody once told me"
          Button(onPress=this.onStart)= "Start test"
    `
  }

  onStart = () => {
    console.log('Start quiz!')
    this.props.startQuiz(this.state.quiz.key)
  }
}

export default QuizDetails
