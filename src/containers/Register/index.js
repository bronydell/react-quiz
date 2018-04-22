import { connect } from 'react-redux'

import { register } from 'src/models/Profile/actions'

import RegisterComponent from 'src/components/Register'

const mapDispatchToProps = {
  register: (email, password) => register.init(email, password),
}

export default connect(null, mapDispatchToProps)(RegisterComponent)
