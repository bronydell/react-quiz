import React from 'react'
import Button from 'src/components/Button'

import { Container, RowWrapper } from './styles'

class Menu extends React.Component {
  render() {
    return pug`
      Container
        RowWrapper
          Button Explore Quizes
        RowWrapper
          Button Profile
    `
  }
}

export default Menu
