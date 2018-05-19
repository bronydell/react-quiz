import { connect } from 'react-redux'

import { getQuiz, editQuestion } from 'src/models/QuizEditor/actions'

import QuizEditor from 'src/components/QuizEditor'

const mapStateToProps = ({ editor }) => ({
  editedQuestion: editor.question,
  quiz: editor.quiz,
})

const mapDispatchToProps = {
  setQuiz: quiz => getQuiz.success(quiz),
  setQuestion: question => editQuestion.success(question),
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizEditor)
