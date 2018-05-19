import React from 'react'
import Title from 'src/components/Title'
import QuizList from 'src/components/QuizList'
import { Container } from './styles'

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
    `
  }
}

export default MyQuizzes
