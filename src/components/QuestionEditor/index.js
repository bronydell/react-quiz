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
        question.answers.push({
          id: this.state.data[i].id,
          text: this.state.data[i].title,
          isAnswer: this.state.selected[0] === this.state.data[i].id,
        })
      }
      console.log('Result: ', question)
    }
  }

  onChangeTitle = (text) => {
    this.setState({
      title: text,
    })
  }
}

export default QuestionEditor
