import React from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'

import { setError } from 'src/models/Global/actions'
import { logIn } from 'src/models/Profile/actions'
import Screens from 'src/screens'
import Error from 'src/components/Error'
import { Content } from './styles'

class GlobalContainer extends React.Component {
  componentDidMount() {
    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
      this.props.logIn(user)
      console.log('User changed:', user)
    })
  }

  componentWillUnmount() {
    this.authSubscription()
  }

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
  logIn: user => logIn.success(user),
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalContainer)
