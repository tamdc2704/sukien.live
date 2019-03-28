import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'

import { nextIndex } from '../../exams/actions'
import Management from './Management'

const mapStateFromProps = (state) => ({
  results: state.results,
  currentIndex: state.currentIndex
})

const mapDispatchFromProps = dispatch => ({
  nextQ: bindActionCreators(nextIndex, dispatch)
})

export default connect(
  mapStateFromProps,
  mapDispatchFromProps
)(Management)
