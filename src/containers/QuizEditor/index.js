import { connect } from 'react-redux'

import { getQuiz, editQuestion, putQuiz } from 'src/models/QuizEditor/actions'

import QuizEditor from 'src/components/QuizEditor'

const mapStateToProps = ({ editor, profile }) => ({
  question: editor.question,
  quiz: editor.quiz,
  user: profile.user,
})

const mapDispatchToProps = {
  setQuiz: quiz => getQuiz.success(quiz),
  sendQuiz: (id, quiz) => putQuiz.init(id, quiz),
  setQuestion: question => editQuestion.success(question),
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizEditor)
