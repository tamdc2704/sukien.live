import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { nextIndex } from '../actions'
import { choose } from '../../results/actions'
import Exam from './Exam'
import data from '../../data.json'

const mapStateToProps = state => ({
  testData: data.questions[state.currentIndex],
  currentIndex: state.currentIndex
})

const mapDisPatchToProps = dispatch => ({
  nextIndex: bindActionCreators(nextIndex, dispatch),
  choose: bindActionCreators(choose, dispatch)
})

const ExamContainer = connect(
  mapStateToProps, 
  mapDisPatchToProps
)(Exam)

export default ExamContainer
