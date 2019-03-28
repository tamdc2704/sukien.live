import { createReducer } from 'redux-starter-kit'
import { choose } from './actions'

export default createReducer({}, {
  [choose]: (state, payload) => {
    const [id, newValue, oldValue] = payload
    state[id][newValue]++
    if(oldValue) state[id][newValue]--
  }
})