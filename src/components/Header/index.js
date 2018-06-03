import React from 'react'
import PropTypes from 'prop-types'
import { withNavigation } from 'react-navigation'

import Title from 'src/components/Title'
import TextButton from 'src/components/TextButton'

import { Container, ButtonWrapper } from './styles'

class Header extends React.Component {
  render() {
    return pug`
      Container
        ButtonWrapper
          TextButton(onPress=this.props.navigation.goBack)= "<"
        Title= this.props.children
    `
  }
}

Header.propTypes = {
  children: PropTypes.string,
}

Header.defaultProps = {
  children: '',
}

export default withNavigation(Header)
