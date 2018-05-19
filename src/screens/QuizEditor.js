import React from 'react'
import QuizEditor from 'src/containers/QuizEditor'

class QuizResultScreen extends React.Component {
  render() {
    return pug`
      QuizEditor(...this.props)
    `
  }
}

export default QuizResultScreen
