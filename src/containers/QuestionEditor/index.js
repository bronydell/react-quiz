import { connect } from 'react-redux'

import { getQuiz, editQuestion } from 'src/models/QuizEditor/actions'

import QuestionEditor from 'src/components/QuestionEditor'

const mapStateToProps = ({ editor }) => ({
  question: editor.question,
  quiz: editor.quiz,
})

const mapDispatchToProps = {
  setQuiz: quiz => getQuiz.success(quiz),
  setQuestion: question => editQuestion.success(question),
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionEditor)
