import React from 'react'
import Register from 'src/containers/Register'
import Login from 'src/containers/Login'
import Profile from 'src/containers/Profile'
import { getUser, setScreen } from 'src/models/Profile/actions'
import { connect } from 'react-redux'

class ProfileScreen extends React.Component {
  componentDidMount() {
    this.setScreen(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== this.props.user) {
      this.setScreen(nextProps)
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
          Profile
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

  setScreen = (nextProps) => {
    const screenName = nextProps.user == null ? 'login' : 'profile'
    this.props.setScreen(screenName)
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
