import React from 'react'
import Header from 'src/components/Header'
import PlainText from 'src/components/PlainText'
import Button from 'src/components/Button'

import {
  Container,
  Content,
  InfoWrapper,
  RowWrapper,
  EmptySpace,
  ButtonsWrapper,
} from './styles'

class ProfilePage extends React.Component {
  render() {
    return pug`
      Container(behavior="padding")
        Header Your profile
        Content
          InfoWrapper
            if this.props.user
              PlainText= "Hello, "+this.props.user.displayName+"!"
          EmptySpace
          ButtonsWrapper
            RowWrapper
              Button(
                onPress=this.props.confirmEmail
                disabled=this.confirmedEmail()
              )= "Confirm Email"
            RowWrapper
              Button(onPress=this.props.logOut)= "Sign out"
    `
  }

  confirmedEmail = () => this.props.user.emailVerified
}

export default ProfilePage
