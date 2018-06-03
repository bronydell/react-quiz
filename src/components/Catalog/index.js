import React from 'react'
import Header from 'src/components/Header'
import QuizList from 'src/components/QuizList'
import { Container, Content } from './styles'

class QuizCatalog extends React.Component {
  componentDidMount() {
    this.props.updateList(null)
  }

  render() {
    return pug`
      Container
        Header= "Quiz Catalog"
        Content
          QuizList(
            data=this.props.data
            onItemPress=this.onDetails
          )
    `
  }

  onDetails = (item) => {
    this.props.navigation.navigate('QuizDetails', {
      quiz: item,
    })
  }
}

export default QuizCatalog
