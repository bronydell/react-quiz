import { connect } from 'react-redux'

import { register, setScreen } from 'src/models/Profile/actions'

import RegisterComponent from 'src/components/Register'

const mapStateToProps = ({ profile }) => ({
  user: profile.user,
  error: profile.error,
})

const mapDispatchToProps = {
  register: (email, password) => register.init(email, password),
  setScreen: screenName => setScreen.success(screenName),
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent)
