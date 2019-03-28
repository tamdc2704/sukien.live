import { createReducer } from 'redux-starter-kit'
import { choose } from './actions'

export default createReducer({}, {
  [choose]: (state, action) => {
    const [id, newValue, oldValue] = action.payload
    state[id][newValue]++
    if(oldValue) state[id][newValue]--
  }
})