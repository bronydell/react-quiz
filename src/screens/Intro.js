import React from 'react'
import { connect } from 'react-redux'
import { getUser } from 'src/models/Profile/actions'

class IntroScreen extends React.Component {
  componentDidMount() {
    this.props.getUser()
  }

  componentWillReceiveProps() {
    this.props.navigation.navigate('Application')
  }

  render() {
    return null
  }
}

const mapStateToProps = ({ profile }) => ({
  user: profile.user,
})

const mapDispatchToProps = {
  getUser: getUser.init,
}

export default connect(mapStateToProps, mapDispatchToProps)(IntroScreen)
