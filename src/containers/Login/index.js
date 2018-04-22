import { connect } from 'react-redux'

import { logIn, setScreen } from 'src/models/Profile/actions'

import LoginComponent from 'src/components/Login'

const mapStateToProps = ({ profile }) => ({
  user: profile.user,
  error: profile.error,
})

const mapDispatchToProps = {
  login: (email, password) => logIn.init(email, password),
  setScreen: screenName => setScreen.success(screenName),
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)
