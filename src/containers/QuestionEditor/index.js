import { connect } from 'react-redux'

import { getQuiz } from 'src/models/QuizEditor/actions'

import MyQuizzes from 'src/components/MyQuizzes'

const mapStateToProps = ({ editor }) => ({
  editedQuestion: editor.question,
  quiz: editor.quiz,
})

const mapDispatchToProps = {
  setQuiz: quiz => getQuiz.success(quiz),
}

export default connect(mapStateToProps, mapDispatchToProps)(MyQuizzes)
