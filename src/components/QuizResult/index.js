import React from 'react'
import Title from 'src/components/Title'
import PlainText from 'src/components/PlainText'
import Button from 'src/components/Button'

import {
  Container,
  Content,
  TitleWrapper,
  InfoWrapper,
  RowWrapper,
} from './styles'

class QuizResult extends React.Component {
  render() {
    return pug`
      Container(behavior="padding")
        Content
          TitleWrapper
            Title= "Results"
          InfoWrapper
            PlainText= "You've answered "+this.props.progress.answered+"/"+this.props.progress.question+" questions right"
            PlainText= "And earned "+this.props.progress.points+" points!"
          RowWrapper
            Button(onPress=this.toMenu)= "Cool! Back to menu"
    `
  }

  toMenu = () => {
    this.props.resetStorage()
    this.props.navigation.navigate('Application')
  }
}

export default QuizResult
