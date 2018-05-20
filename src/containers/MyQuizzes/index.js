import { connect } from 'react-redux'

import { getMyQuizzes, getQuiz } from 'src/models/QuizEditor/actions'

import MyQuizzes from 'src/components/MyQuizzes'

const mapStateToProps = ({ editor }) => ({
  myQuizzes: editor.myQuizzes,
  quiz: editor.quiz,
})

const mapDispatchToProps = {
  fetchQuizzes: getMyQuizzes.init,
  fetchQuiz: getQuiz.init,
  setQuiz: quiz => getQuiz.success(quiz),
}

export default connect(mapStateToProps, mapDispatchToProps)(MyQuizzes)
