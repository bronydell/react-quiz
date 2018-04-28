import { connect } from 'react-redux'

import { fetchQuizes } from 'src/models/Catalog/actions'

import QuizCatalog from 'src/components/Catalog'

const mapStateToProps = ({ catalog }) => ({
  data: catalog.quizes,
})

const mapDispatchToProps = {
  updateList: lastItem => fetchQuizes.init(lastItem),
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizCatalog)
