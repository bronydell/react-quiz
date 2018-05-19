import React from 'react'
import MyQuizzes from 'src/containers/MyQuizzes'

class MyQuizzesScreen extends React.Component {
  render() {
    return pug`
      MyQuizzes(...this.props)
    `
  }
}

export default MyQuizzesScreen
