import { connect } from 'react-redux'

import { logOut, setScreen, confirmEmail } from 'src/models/Profile/actions'

import ProfileComponent from 'src/components/Profile'

const mapStateToProps = ({ profile }) => ({
  user: profile.user,
})

const mapDispatchToProps = {
  logOut: () => logOut.init(),
  confirmEmail: () => confirmEmail.init(),
  setScreen: screenName => setScreen.success(screenName),
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent)
