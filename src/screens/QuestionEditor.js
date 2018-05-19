import React from 'react'
import QuestionEditor from 'src/containers/QuestionEditor'

class QuestionEditorScreen extends React.Component {
  render() {
    return pug`
      QuestionEditor(...this.props)
    `
  }
}

export default QuestionEditorScreen
