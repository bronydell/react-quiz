import { connect } from 'react-redux'

import { login } from 'src/models/Profile/actions'

import LoginComponent from 'src/components/Login'

const mapDispatchToProps = {
  login: (email, password) => login.init(email, password),
}

export default connect(null, mapDispatchToProps)(LoginComponent)
