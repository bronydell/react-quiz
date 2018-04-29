import React from 'react'
import Title from 'src/components/Title'
import Keyboard from 'src/components/Keyboard'
import Text from 'src/components/PlainText'

import {
  Container,
  Content,
  QuestionWrapper,
  KeyboardWrapper,
  TitleWrapper,
} from './styles'

class Quiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pressedButton: null,
    }
    this.props.setProgress({
      question: 0,
      points: 0,
      answered: 0,
    })
  }
  render() {
    const question = this.props.quiz.questions[this.props.question]
    const onItemPress = this.state.pressedButton ? this.onNext : this.onAnswer
    return pug`
      Container
        TitleWrapper
          Title= "Question #"+(this.props.question+1)
        Content
          QuestionWrapper
            Text= question.question
          KeyboardWrapper
            Keyboard(
              options=question.answers
              onItemPress=onItemPress
              pressedButton=this.state.pressedButton
            )
    `
  }

  onAnswer = (item) => {
    this.setState({
      pressedButton: item.id,
    })
    // eslint-disable-next-line
    const progress = this.props.progress
    progress.question += 1
    if (item.isAnswer) {
      progress.answered += 1
      progress.points += this.props.quiz.questions[this.props.question].points
    }
    this.props.setProgress(progress)
  }

  onNext = () => {
    if (this.props.question + 1 < this.props.quiz.questions.length) {
      this.setState({
        pressedButton: null,
      })
      this.props.setQuestion(this.props.question + 1)
    } else {
      this.props.navigation.navigate('Result')
    }
  }
}

export default Quiz
