import React from 'react'
import Title from 'src/components/Title'
import Button from 'src/components/Button'
import InputField from 'src/components/InputField'
import PlainText from 'src/components/PlainText'
import QuizList from 'src/components/QuizList'
import { Container, BottomButtonWrapper, EmptySpace } from './styles'

class MyQuizzes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
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
        PlainText= "Question list:"
        QuizList(
          data=this.props.myQuizzes
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
    this.props.navigation.navigate('QuestionEditor')
  }

  onChangeName = (text) => {
    this.setState({
      displayName: text,
    })
  }
}

export default MyQuizzes
