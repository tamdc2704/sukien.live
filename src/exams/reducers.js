import { createReducer } from 'redux-starter-kit'
import { nextIndex } from './actions'

export default createReducer(0, {
  [nextIndex]: (state, action) => state + action.payload
})