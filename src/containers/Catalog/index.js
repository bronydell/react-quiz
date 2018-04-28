import { connect } from 'react-redux'

import { fetchQuizes, selectQuiz } from 'src/models/Catalog/actions'

import QuizCatalog from 'src/components/Catalog'

const mapStateToProps = ({ catalog }) => ({
  data: catalog.quizes,
})

const mapDispatchToProps = {
  updateList: lastItem => fetchQuizes.init(lastItem),
  selectQuiz: quiz => selectQuiz.success(quiz),
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizCatalog)
