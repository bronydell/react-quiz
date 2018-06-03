import { connect } from 'react-redux'

import { setError } from 'src/models/Global/actions'

import MenuComponent from 'src/components/Menu'

const mapStateToProps = ({ profile }) => ({
  user: profile.user,
})

const mapDispatchToProps = {
  setError: error => setError.success(error),
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent)
