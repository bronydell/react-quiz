import React from 'react'
import { Text } from 'react-native'
import Register from 'src/containers/Register'
import Login from 'src/containers/Login'
import { getUser, setScreen } from 'src/models/Profile/actions'
import { connect } from 'react-redux'

class ProfileScreen extends React.Component {
  componentDidMount() {
    this.props.getUser()
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextprops:', nextProps)
    if (nextProps.user !== this.props.user) {
      const screenName = nextProps.user === null ? 'login' : 'profile'
      this.props.setScreen(screenName)
    }
  }

  render() {
    return pug`
      ${this.renderContent()}
    `
  }

  renderContent() {
    switch (this.props.screen) {
      case 'profile':
        return pug`
          Text Profile
        `
      case 'login':
        return pug`
          Login
        `
      case 'register':
        return pug`
          Register
        `
      default:
        return null
    }
  }
}

const mapStateToProps = ({ profile }) => ({
  screen: profile.screen,
  user: profile.user,
})

const mapDispatchToProps = {
  getUser: () => getUser.init(),
  setScreen: screenName => setScreen.success(screenName),
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
