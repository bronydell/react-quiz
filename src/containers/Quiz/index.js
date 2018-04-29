import { connect } from 'react-redux'
import { setQuestion, setProgress } from 'src/models/Quiz/actions'
import QuizComponent from 'src/components/Quiz'

const mapStateToProps = ({ catalog, quiz }) => ({
  quiz: catalog.quiz,
  question: quiz.question,
  progress: quiz.progress,
})

const mapDispatchToProps = {
  setQuestion: question => setQuestion.success(question),
  setProgress: progress => setProgress.success(progress),
}
export default connect(mapStateToProps, mapDispatchToProps)(QuizComponent)
