import React from 'react'
import Header from 'src/components/Header'
import Button from 'src/components/Button'
import QuizList from 'src/components/QuizList'
import {
  Container,
  BottomButtonWrapper,
  EmptySpace,
  Content,
} from './styles'

class MyQuizzes extends React.Component {
  componentDidMount() {
    this.props.fetchQuizzes()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.quiz) {
      this.props.navigation.navigate('QuizEditor')
    }
  }

  render() {
    return pug`
      Container
        Header= "My quizzes"
        Content
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
