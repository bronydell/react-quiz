import { connect } from 'react-redux'

import { getProgress } from 'src/models/Quiz/actions'
import { setError } from 'src/models/Global/actions'

import MenuComponent from 'src/components/Menu'

const mapStateToProps = ({ profile, quiz }) => ({
  user: profile.user,
  quiz: quiz.quiz,
  progress: quiz.progress,
})

const mapDispatchToProps = {
  setError: error => setError.success(error),
  getProgress: () => getProgress.init(),
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent)
