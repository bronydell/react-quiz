import React from 'react'
import { connect } from 'react-redux'
import { updateColor } from 'src/models/Welcome/actions'

import WelcomeMessage from 'src/components/WelcomeMessage'

export class ContainerWelcomeMessage extends React.Component {
  render() {
    return pug`
      WelcomeMessage(...this.props)
    `
  }
}

const mapStateToProps = ({ welcome }) => ({
  color: welcome.color,
})

const mapDispatchToProps = {
  action: updateColor.init,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerWelcomeMessage)
