import { connect } from 'react-redux'
import { setQuestion, setProgress, syncProgress } from 'src/models/Quiz/actions'
import QuizComponent from 'src/components/Quiz'

const mapStateToProps = ({ quiz }) => ({
  quiz: quiz.quiz,
  question: quiz.question,
  progress: quiz.progress,
})

const mapDispatchToProps = {
  setQuestion: question => setQuestion.success(question),
  setProgress: progress => setProgress.success(progress),
  syncProgress: () => syncProgress.init(),
}
export default connect(mapStateToProps, mapDispatchToProps)(QuizComponent)
