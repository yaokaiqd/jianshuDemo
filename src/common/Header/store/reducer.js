import * as actionType from './constants'
import {fromJS} from 'immutable'
const defaultState = fromJS({
  SearchActive: false,
  showSearchInfo: false,
  HotSearchList: [],
  page: 1,
  totalPage: 1,
  searchMovie: null,
})


export default (state = defaultState,action) => {
  switch(action.type) {
    case actionType.SEARCH_ACTIVE :
      return state.set('SearchActive',true)
    case actionType.SEARCH_DEFAULT :
      return state.set('SearchActive',false)
    case actionType.SEARCHINFO_HIDDEN :
      return state.set('showSearchInfo',false)
    case actionType.SEARCHINFO_SHOW :
      return state.set('showSearchInfo',true)
    case actionType.SET_HOTSEARCHLIST :
      return state.set('HotSearchList',action.data).set('totalPage',action.totalPage)
    case actionType.SET_CHANGEPAGE : 
      return state.set('page',action.page)
    case actionType.SET_SEARCHMOVIE :
      return state.set('searchMovie',action.data)
    case actionType.SET_SEARCHMOVIERE :
      return state.set('searchMovie',null)
    default :
      return state
  }
}