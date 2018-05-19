import React from 'react'
import Title from 'src/components/Title'
import Button from 'src/components/Button'
import InputField from 'src/components/InputField'
import PlainText from 'src/components/PlainText'
import QuestionList from 'src/components/QuestionList'
import { Container, BottomButtonWrapper, EmptySpace } from './styles'

class QuizEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.quiz.title,
      description: this.props.quiz.description,
    }
  }

  render() {
    return pug`
      Container
        Title= "Quiz editor"
        PlainText= "Quiz title:"
        InputField(
          text=this.state.title
          onChange=this.onChangeTitle
        )= "Quiz title"
        PlainText= "Quiz description:"
        InputField(
          text=this.state.title
          onChange=this.onChangeDescription
        )= "Quiz title"
        PlainText= "Question list:"
        QuestionList(
          data=this.props.quiz.questions
        )
        EmptySpace
        BottomButtonWrapper
          Button(
            onPress=this.onNewQuestion
          )= "Create new Question"
        BottomButtonWrapper
          Button= "Publish"
    `
  }

  onChangeTitle = (text) => {
    this.setState({
      title: text,
    })
  }

  onNewQuestion = () => {
    this.props.setQuestion(-1)
    this.props.navigation.navigate('QuestionEditor')
  }

  onChangeName = (text) => {
    this.setState({
      displayName: text,
    })
  }

  onChangeDescription = (text) => {
    this.setState({
      description: text,
    })
  }
}

export default QuizEditor
