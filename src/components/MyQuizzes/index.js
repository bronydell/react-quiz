import React from 'react'
import Title from 'src/components/Title'
import Button from 'src/components/Button'
import QuizList from 'src/components/QuizList'
import { Container, BottomButtonWrapper, EmptySpace } from './styles'

class MyQuizzes extends React.Component {
  componentDidMount() {
    this.props.fetchQuizzes()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.quiz) {
      console.log(nextProps.quiz)
      this.props.navigation.navigate('QuizEditor')
    }
  }

  render() {
    return pug`
      Container
        Title= "My quizzes"
        QuizList(
          data=this.props.myQuizzes
          onItemPress=this.onQuizEditor
        )
        EmptySpace
        BottomButtonWrapper
          Button(
            onPress=this.onNewQuizEditor
          )= "Create new test"
    `
  }

  onQuizEditor = (quizDetails) => {
    this.props.fetchQuiz(quizDetails.key)
  }

  onNewQuizEditor = () => {
    this.props.setQuiz({
      questions: [],
    })
  }
}

export default MyQuizzes
