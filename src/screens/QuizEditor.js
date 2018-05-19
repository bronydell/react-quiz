import React from 'react'
import QuizEditor from 'src/containers/QuizEditor'

class QuizEditorScreen extends React.Component {
  render() {
    return pug`
      QuizEditor(...this.props)
    `
  }
}

export default QuizEditorScreen
