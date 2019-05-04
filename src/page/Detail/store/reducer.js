import * as actionType from './constants'
import {fromJS} from 'immutable'
const defaultState = fromJS({
  movieMsg: null,
})

export default (state = defaultState,action) => {
  if(action.type === actionType.SET_MOVIE) {
    return state.set('movieMsg',action.data)
  }
  if(action.type === actionType.RESET_MOVIE) {
    return state.set('movieMsg',null)
  }
  return state
}