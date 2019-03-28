import { createReducer } from 'redux-starter-kit'
import { nextQuestion } from './actions'

export default createReducer(0, {
  [nextQuestion]: state => state + 1
})