import { connect } from 'react-redux'

import { getMyQuizzes } from 'src/models/QuizEditor/actions'

import MyQuizzes from 'src/components/MyQuizzes'

const mapStateToProps = ({ editor }) => ({
  myQuizzes: editor.myQuizzes,
})

const mapDispatchToProps = {
  fetchQuizzes: getMyQuizzes.init,
}

export default connect(mapStateToProps, mapDispatchToProps)(MyQuizzes)
