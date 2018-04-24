import React from 'react'
import Title from 'src/components/Title'
import {
  Container,
  TitleWrapper,
} from './styles'

class QuizCatalog extends React.Component {
  render() {
    // this.props.updateList(null)
    return pug`
      Container
        TitleWrapper
          Title= "Quiz Catalog"

    `
  }
}

export default QuizCatalog
