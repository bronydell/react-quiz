import { connect } from 'react-redux'
import { setQuestion } from 'src/models/Quiz/actions'
import QuizComponent from 'src/components/Quiz'

const mapStateToProps = ({ catalog, quiz }) => ({
  quiz: catalog.quiz,
  question: quiz.question,
})

const mapDispatchToProps = {
  setQuestion: question => setQuestion.success(question),
}
export default connect(mapStateToProps, mapDispatchToProps)(QuizComponent)
