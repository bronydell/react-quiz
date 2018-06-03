import { connect } from 'react-redux'
import { setQuiz } from 'src/models/Quiz/actions'
import QuizDetails from 'src/components/QuizDetails'

const mapStateToProps = ({ quiz }) => ({
  quiz: quiz.quiz,
})

const mapDispatchToProps = {
  startQuiz: id => setQuiz.init(id),
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizDetails)
