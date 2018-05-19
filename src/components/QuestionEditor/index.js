import React from 'react'
import Title from 'src/components/Title'
import Button from 'src/components/Button'
import InputField from 'src/components/InputField'
import PlainText from 'src/components/PlainText'
import OptionsList from 'src/components/OptionsList'
import { Container, BottomButtonWrapper, Content } from './styles'

class QuestionEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questionText: '',
      selected: ['0'],
      data: [
        {
          key: '0',
          title: 'Hello',
        },
        {
          key: '1',
          title: 'World',
        },
      ],
    }
    if (this.props.question !== -1) {
      const { quiz } = this.props
      this.state = {
        questionText: quiz[this.props.question].question,
        selected: [this.getAnswerID()],
        data: this.parseData(),
      }
    }
  }

  render() {
    const disableAddButton = this.state.data.length >= 4
    return pug`
      Container(behavior="padding" enabled)
        Title= "Question editor"
        Content(alwaysBounceVertical=false)
          PlainText= "Question text:"
          InputField(
            maxLength=144
            text=this.state.title
            onChange=this.onChangeTitle
          )= "Question text"
          PlainText= "Question list:"
          OptionsList(
            data=this.state.data
            selected=this.state.selected
            onChangeData=this.onChangeData
            onChange=this.onSelectAnswer
          )
          BottomButtonWrapper
            Button(
              disabled=disableAddButton
              onPress=this.onAddOption
            )= "Add option"
          BottomButtonWrapper
            Button(
              onPress=this.onDone
            )= "Finish"
    `
  }

  getAnswerID = () => {
    const { quiz, question } = this.props
    for (let i = 0; i < quiz.questions[question].answers.length; i += 1) {
      if (quiz.questions[question].answers[i].isAnswer) {
        return quiz.questions[question].answers[i].id
      }
    }
    return null
  }

  parseData = () => {
    const result = []
    const { quiz, question } = this.props
    for (let i = 0; i < quiz.questions[question].answers.length; i += 1) {
      result.push({
        key: quiz.questions[question].answers[i].id,
        title: quiz.questions[question].answers[i].text,
      })
    }
    return null
  }

  onAddOption = () => {
    const newData = this.state.data
    if (newData.length < 4) {
      newData.push({
        key: newData.length.toString(),
        title: '',
      })
      this.setState({
        data: newData,
      })
    } else {
      console.log('Nope')
    }
  }

  onSelectAnswer = (selected) => {
    this.setState({
      selected,
    })
  }

  onChangeData = ({ id, text }) => {
    const newData = this.state.data
    newData[parseInt(id, 10)].title = text
    this.setState({
      data: newData,
    })
  }

  onDone = () => {
    if (this.state.questionText) {
      const question = {}
      question.question = this.state.questionText
      question.points = 1
      question.answers = []
      for (let i = 0; i < this.state.data.length; i += 1) {
        if (!this.state.data[i].title) {
          return
        }
        question.answers.push({
          id: this.state.data[i].id,
          text: this.state.data[i].title,
          isAnswer: this.state.selected[0] === this.state.data[i].id,
        })
      }
      const { quiz } = this.props
      if (this.props.question === -1) {
        quiz.questions.push(question)
        this.props.setQuiz(quiz)
      } else {
        quiz.questions[this.props.question] = question
        this.props.setQuiz(quiz)
      }
      this.props.navigation.goBack()
    }
  }

  onChangeTitle = (text) => {
    this.setState({
      title: text,
    })
  }
}

export default QuestionEditor
