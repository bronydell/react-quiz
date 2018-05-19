import React from 'react'
import { NavigationActions } from 'react-navigation'
import Title from 'src/components/Title'
import Button from 'src/components/Button'
import InputField from 'src/components/InputField'
import PlainText from 'src/components/PlainText'
import QuestionList from 'src/components/QuestionList'
import { Container, BottomButtonWrapper, EmptySpace } from './styles'

class QuizEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.quiz.title,
      description: this.props.quiz.description,
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('Nextprops! Yay!', nextProps)
    if (nextProps.quiz) {
      if (nextProps.question !== null && nextProps.question !== undefined) {
        this.props.navigation.navigate('QuestionEditor')
      }
    } else {
      this.props.navigation.dispatch(NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Menu' }),
        ],
      }))
    }
  }

  render() {
    if (!this.props.quiz) {
      return null
    }
    return pug`
      Container
        Title= "Quiz editor"
        PlainText= "Quiz title:"
        InputField(
          text=this.state.title
          onChange=this.onChangeTitle
        )= "Quiz title"
        PlainText= "Quiz description:"
        InputField(
          text=this.state.description
          onChange=this.onChangeDescription
        )= "Quiz title"
        PlainText= "Question list:"
        QuestionList(
          data=this.props.quiz.questions
          onItemPress=this.onQuestion
        )
        EmptySpace
        BottomButtonWrapper
          Button(
            onPress=this.onNewQuestion
          )= "Create new Question"
        BottomButtonWrapper
          Button(
            onPress=this.onPublish
            disabled=!this.canPublish()
          )= "Publish"
    `
  }

  onChangeTitle = (text) => {
    this.setState({
      title: text,
    })
  }

  onNewQuestion = () => {
    this.props.setQuestion(-1)
  }

  onPublish = () => {
    if (this.canPublish()) {
      const { quiz } = this.props
      const { key } = quiz
      delete quiz.key
      quiz.title = this.state.title
      quiz.description = this.state.description
      quiz.author = this.props.user.uid
      quiz.displayName = this.props.user.displayName
      console.log('Quiz:', quiz, 'Id: ', key)
      this.props.sendQuiz(key, quiz)
    }
  }

  canPublish = () => this.state.title && this.props.quiz.questions.length >= 1
  onQuestion = (id) => {
    this.props.setQuestion(id)
  }

  onChangeName = (text) => {
    this.setState({
      displayName: text,
    })
  }

  onChangeDescription = (text) => {
    this.setState({
      description: text,
    })
  }
}

export default QuizEditor
