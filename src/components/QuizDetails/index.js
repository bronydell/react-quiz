import React from 'react'
import Header from 'src/components/Header'
import Button from 'src/components/Button'
import Text from 'src/components/PlainText'

import {
  Container,
  Content,
  DetailsWrapper,
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
        Header= "Quiz details"
        Content
          DetailsWrapper
            Text= "Description: "+this.state.quiz.description
            Text= "Author: "+this.state.quiz.displayName
          Button(onPress=this.onStart)= "Start test"
    `
  }

  onStart = () => {
    this.props.startQuiz(this.state.quiz.key)
  }
}

export default QuizDetails
