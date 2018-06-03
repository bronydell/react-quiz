import React from 'react'
import PropTypes from 'prop-types'
import { Modal, TouchableWithoutFeedback } from 'react-native'
import { ModalContent, Background, CloseButton, CloseButtonText, Content } from './styles'

const Popup = props => pug`
  Modal(
    visible
    transparent
    animationType="fade"
    onRequestClose=props.toggleModal
  )
    TouchableWithoutFeedback(onPress=props.toggleModal)
      Background
        TouchableWithoutFeedback
          ModalContent
            CloseButton(onPress=props.toggleModal)
              CloseButtonText &times;

            Content
              = props.children
`

Popup.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  children: PropTypes.node,
}

Popup.defaultProps = {
  children: null,
}

export default Popup
