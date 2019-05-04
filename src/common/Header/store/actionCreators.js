import * as action from './constants'
import axios from 'axios'
import {fromJS} from 'immutable'
export const focusHandle = () => {
  return {
    type: action.SEARCH_ACTIVE
  }
}
export const blurHandle = () => {
  return {
    type: action.SEARCH_DEFAULT
  }
}

export const mouseOut = () => {
  return {
    type: action.SEARCHINFO_HIDDEN
  }
}

export const mouseIn = () => {
  return {
    type: action.SEARCHINFO_SHOW
  }
}

export const changePage = (page) => {
  return {
    type: action.SET_CHANGEPAGE,
    page
  }
}

function setHotSearchList(data) {
  return {
    type: action.SET_HOTSEARCHLIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10),
  }
}
function setSearchMovie(data) {
  return {
    type: action.SET_SEARCHMOVIE,
    data
  }
}
export const getHotSearch = () => {
  return (dispatch) => {  
    axios.get('/v2/movie/in_theaters').then((res) => {
      const data = res.data.subjects.map(it => it = {title: it.title,id: it.id})
      dispatch(setHotSearchList(data))
    }).catch((err) => console.log(err))
  }
}
export const searchMovie = (data) => {
  return (dispatch) => {
    axios.get('/v2/movie/search?q=' + data).then((res) => {
      dispatch(setSearchMovie(res.data.subjects[0].id))
    }).catch(err => console.log(err))
  }
}
export const resetSearch = () => {
  return {
    type: action.SET_SEARCHMOVIERE
  }
}