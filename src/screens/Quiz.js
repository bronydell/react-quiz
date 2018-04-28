import React from 'react'
import Quiz from 'src/containers/Quiz'

class QuizScreen extends React.Component {
  render() {
    return pug`
      Quiz(...this.props)
    `
  }
}

export default QuizScreen
