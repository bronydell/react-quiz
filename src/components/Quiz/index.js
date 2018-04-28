import React from 'react'
import Title from 'src/components/Title'
import Button from 'src/components/Button'
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
  }

  onNext = () => {
    if (this.props.question + 1 < this.props.quiz.questions.length) {
      this.setState({
        pressedButton: null,
      })
      this.props.setQuestion(this.props.question + 1)
    } else {
      console.log('That\'s it boy')
    }
  }
}

export default Quiz
