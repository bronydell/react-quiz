import React from 'react'
import { connect } from 'react-redux'

import { setError } from 'src/models/Global/actions'
import Screens from 'src/screens'
import Error from 'src/components/Error'
import { Content } from './styles'

class GlobalContainer extends React.Component {
  render() {
    return pug`
      Content
        Screens
        if this.props.error != null
          Error(
            text=this.props.error
            onClose=this.onClose
          )
    `
  }

  onClose = () => {
    this.props.setError(null)
  }
}

const mapStateToProps = ({ global }) => ({
  error: global.error,
})

const mapDispatchToProps = {
  setError: error => setError.success(error),
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalContainer)
