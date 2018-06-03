import React from 'react'
import Header from 'src/components/Header'
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
          title: '',
        },
        {
          key: '1',
          title: '',
        },
      ],
    }
    if (props.question !== -1) {
      const { quiz, question } = props
      this.state = {
        questionText: quiz.questions[question].question,
        selected: [this.getAnswerID()],
        data: this.parseData(),
      }
    }
  }

  componentWillUnmount() {
    this.props.setQuestion(null)
  }

  render() {
    return pug`
      Container(behavior="padding" enabled)
        Header= "Question editor"
        Content(alwaysBounceVertical=false)
          PlainText= "Question text:"
          InputField(
            maxLength=144
            text=this.state.questionText
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
              disabled=!this.canAddOption()
              onPress=this.onAddOption
            )= "Add option"
          BottomButtonWrapper
            Button(
              onPress=this.onDone
              disabled=!this.canFinish()
            )= "Finish"
    `
  }

  getAnswerID = () => {
    const { quiz, question } = this.props
    for (let i = 0; i < quiz.questions[question].answers.length; i += 1) {
      if (quiz.questions[question].answers[i].isAnswer) {
        return (quiz.questions[question].answers[i].id).toString()
      }
    }
    return null
  }

  parseData = () => {
    const result = []
    const { quiz, question } = this.props
    for (let i = 0; i < quiz.questions[question].answers.length; i += 1) {
      result.push({
        key: (quiz.questions[question].answers[i].id).toString(),
        title: quiz.questions[question].answers[i].text,
      })
    }
    return result
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
    if (Array.isArray(selected)) {
      this.setState({
        selected,
      })
    }
  }

  onChangeData = ({ action, id, text }) => {
    const newData = this.state.data
    const newSelected = this.state.selected
    if (action === 'TITLE_EDIT') {
      newData[parseInt(id, 10)].title = text
    } else if (action === 'DELETE_ROW') {
      let index = 0
      for (let i = 0; i < newData.length; i += 1) {
        const { key } = newData[i]
        if (key === id) {
          newData.splice(i, 1)
          if (key === newSelected[0]) {
            newSelected[0] = newData[0].key
          }
        } else {
          newData[i].key = index.toString()
          index += 1
        }
      }
    }
    this.setState({
      data: newData,
      selected: newSelected,
    })
  }

  onDone = () => {
    if (this.canFinish()) {
      const question = {}
      question.question = this.state.questionText
      question.points = 1
      question.answers = []
      for (let i = 0; i < this.state.data.length; i += 1) {
        if (!this.state.data[i].title) {
          return
        }
        question.answers.push({
          id: parseInt(this.state.data[i].key, 10),
          text: this.state.data[i].title,
          isAnswer: this.state.selected[0] === this.state.data[i].key,
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

  canFinish = () => this.state.questionText && this.state.data.length >= 2
  canAddOption = () => this.state.data.length < 4

  onChangeTitle = (text) => {
    this.setState({
      questionText: text,
    })
  }
}

export default QuestionEditor
