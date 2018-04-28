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
            PlainText= "You've answered x/y questions right"
            PlainText= "And earned x more points. Nice bruv!"
          RowWrapper
            Button(onPress=this.toMenu)= "Cool! Back to menu"
    `
  }

  toMenu = () => {
    this.props.navigation.navigate('Application')
  }
}

export default QuizResult
