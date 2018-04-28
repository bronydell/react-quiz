import { connect } from 'react-redux'

import QuizDetails from 'src/components/QuizDetails'

const mapStateToProps = ({ catalog }) => ({
  quiz: catalog.selectedQuiz,
})

export default connect(mapStateToProps)(QuizDetails)
