import { connect } from 'react-redux'

import { fetchQuizes } from 'src/models/Catalog/actions'

import QuizCatalog from 'src/components/Catalog'

const mapStateToProps = ({ catalog }) => ({
  data: catalog.quizes,
  loading: catalog.loading,
})

const mapDispatchToProps = {
  updateList: filterText => fetchQuizes.init(filterText),
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizCatalog)
