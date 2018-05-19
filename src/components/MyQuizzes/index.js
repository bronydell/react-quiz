import React from 'react'
import Title from 'src/components/Title'
import Button from 'src/components/Button'
import QuizList from 'src/components/QuizList'
import { Container, BottomButtonWrapper, EmptySpace } from './styles'

class MyQuizzes extends React.Component {
  componentDidMount() {
    this.props.fetchQuizzes()
  }

  render() {
    return pug`
      Container
        Title= "My quizzes"
        QuizList(
          data=this.props.myQuizzes
        )
        EmptySpace
        BottomButtonWrapper
          Button(
            onPress=this.onQuizEditor
          )= "Create new test"
    `
  }
  onQuizEditor = () => {
    this.props.navigation.navigate('QuizEditor')
  }
}

export default MyQuizzes
