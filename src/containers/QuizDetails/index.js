import { connect } from 'react-redux'
import { setQuiz } from 'src/models/Catalog/actions'
import QuizDetails from 'src/components/QuizDetails'

const mapStateToProps = ({ catalog }) => ({
  quiz: catalog.quiz,
})

const mapDispatchToProps = {
  startQuiz: id => setQuiz.init(id),
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizDetails)
