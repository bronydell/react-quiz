import React from 'react'
import QuestionEditor from 'src/components/QuestionEditor'

class QuestionEditorScreen extends React.Component {
  render() {
    return pug`
      QuestionEditor(...this.props)
    `
  }
}

export default QuestionEditorScreen
