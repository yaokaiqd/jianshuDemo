import axios from 'axios'
import * as actionType from './constants'
import {fromJS} from 'immutable'


const updateContent = (data) => {
  return {
    type: actionType.SET_CONTENTLIST,
    data: fromJS(data),
  }
}
const updateLength = () => {
  return {
    type: actionType.SET_LISTLENGTH
  }
}

const addContent = (data) => {
  return {
    type: actionType.ADD_CONTENTLIST,
    data: fromJS(data)
  }
}
const hiddenContentWaiting = () => {
  return {
    type: actionType.SET_CONTENTWAITINGFALSE
  }
}
export const showGotoTop = () => {
  return {
    type: actionType.SET_GOTOTOPTRUE
  }
}
export const hiddenGotoTop = () => {
  return {
    type: actionType.SET_GOTOTOPFALSE
  }
}
export const showContentWaiting = () => {
  return {
    type: actionType.SET_CONTENTWAITINGTRUE
  }
}
export  const getContent = () => {
  return (dispatch) => {
    axios.get('/v2/movie/top250?apikey=0b2bdeda43b5688921839c8ecb20399b').then((res) => {
      console.log(res.data.subjects)
      dispatch(hiddenContentWaiting())
      dispatch(updateContent(res.data.subjects))
    }).catch(err => console.log(err))
  }
}

export const getMoreContent = (start) => {
  return (dispatch) => {
    axios.get('/v2/movie/top250?apikey=0b2bdeda43b5688921839c8ecb20399b&start=' + start).then((res) => {
      dispatch(updateLength())
      dispatch(hiddenContentWaiting())
      dispatch(addContent(res.data.subjects))
    }).catch(err => console.log(err))
  }
}