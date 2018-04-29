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

class ProfilePage extends React.Component {
  render() {
    return pug`
      Container(behavior="padding")
        Content
          TitleWrapper
            Title Your profile
          InfoWrapper
            if this.props.user
              PlainText= "Hello, "+this.props.user.displayName+"!"
            PlainText= "You've finished 0 quizzes and got 0 points"
          RowWrapper
            Button(onPress=this.props.logOut)= "Sign out"
    `
  }
}

export default ProfilePage
