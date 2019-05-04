import {fromJS} from 'immutable'
import * as actionType from './constants'
const defaultState = fromJS({
  loginStatus: false,
})
export default (state = defaultState,action) => {
  switch(action.type) {
    case actionType.CHANGE_LOGTRUE :
      return state.set('loginStatus',action.value)
    case actionType.CHANGE_LOGFALSE :
      return state.set('loginStatus',action.value)
    default :
      return state
  }
}