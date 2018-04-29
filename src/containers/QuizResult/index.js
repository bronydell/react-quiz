import { connect } from 'react-redux'
import { setProgress, resetStorage } from 'src/models/Quiz/actions'
import QuizResult from 'src/components/QuizResult'

const mapStateToProps = ({ quiz }) => ({
  progress: quiz.progress,
})

const mapDispatchToProps = {
  setProgress: progress => setProgress.success(progress),
  resetStorage: () => resetStorage.success(),
}
export default connect(mapStateToProps, mapDispatchToProps)(QuizResult)
