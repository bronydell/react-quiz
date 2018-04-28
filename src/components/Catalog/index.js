import React from 'react'
import Title from 'src/components/Title'
import QuizList from 'src/components/QuizList'
import {
  Container,
  TitleWrapper,
} from './styles'

class QuizCatalog extends React.Component {
  componentDidMount() {
    this.props.updateList(null)
  }

  render() {
    return pug`
      Container
        TitleWrapper
          Title= "Quiz Catalog"
        QuizList(
          data=this.props.data
          onItemPress=this.onDetails
        )
    `
  }

  onDetails = (item) => {
    this.props.selectQuiz(item)
    this.props.navigation.navigate('QuizDetails', {
      quiz: item,
    })
  }
}

export default QuizCatalog
