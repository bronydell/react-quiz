import React from 'react'
import _ from 'lodash'

import Header from 'src/components/Header'
import InputField from 'src/components/InputField'
import QuizList from 'src/components/QuizList'
import {
  Container,
  Content,
} from './styles'

class QuizCatalog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterText: null,
    }
    this.onFilter = _.debounce(this.onFilter, 250)
  }
  componentDidMount() {
    this.props.updateList(this.onFilter(''))
  }

  render() {
    return pug`
      Container
        Header= "Quiz Catalog"
        Content
          InputField(
            autoCapitalize="none"
            text=this.state.filterText
            onChange=this.onChangeFilterText
          )= "Filter"
          QuizList(
            data=this.props.data
            refreshing=this.props.loading
            onRefresh=this.props.updateList
            onItemPress=this.onDetails
          )
    `
  }

  onChangeFilterText = (text) => {
    this.setState({
      filterText: text,
    })
    this.onFilter(text)
  }

  onFilter = (text) => {
    this.props.updateList(text)
  }

  onDetails = (item) => {
    this.props.navigation.navigate('QuizDetails', {
      quiz: item,
    })
  }
}

export default QuizCatalog
