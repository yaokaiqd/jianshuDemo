import {fromJS} from 'immutable'
import * as actionType from './constants'

const defaultState = fromJS({
  contentList: [],
  contentLength: 20,
  contentWaitingStatus: true,
  gotoTopStatus: false,
})


export default (state = defaultState,action) => {
  switch(action.type) {
    case actionType.SET_CONTENTLIST :
      return state.set('contentList',action.data)
    case actionType.SET_LISTLENGTH: 
      return state.set('contentLength',state.get('contentLength') + 20)
    case actionType.ADD_CONTENTLIST:
      return state.set('contentList', state.get('contentList').concat(action.data))
    case actionType.SET_CONTENTWAITINGFALSE:
      return state.set('contentWaitingStatus',false)
    case actionType.SET_CONTENTWAITINGTRUE: 
      return state.set('contentWaitingStatus', true)
    case actionType.SET_GOTOTOPFALSE:
      return state.set('gotoTopStatus',false)
    case actionType.SET_GOTOTOPTRUE:
      return state.set('gotoTopStatus',true)
    default :
      return state
  }
} 