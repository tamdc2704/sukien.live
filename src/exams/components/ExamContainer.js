import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { nextQuestion } from '../actions'
import Exam from './Exam'
import data from '../../data.json'

const mapStateToProps = state => ({
  data: data,
  currentIndex: state.currentIndex
})

const mapDisPatchToProps = dispatch => ({
  nextQuestion: bindActionCreators(nextQuestion, dispatch)
})

const ExamContainer = connect(
  mapStateToProps, 
  mapDisPatchToProps
)(Exam)

export default ExamContainer
