import axios from 'axios'
import * as actionType from './constants' 
import {fromJS} from 'immutable'

const setMovie = (data) => {
  return {
    type: actionType.SET_MOVIE,
    data: data
  }
}
export const getMovieItem = (data) => {
  return (dispatch) => {
    axios.get('/v2/movie/subject/' + data + '?apikey=0b2bdeda43b5688921839c8ecb20399b').then((res) => {
      console.log(res)
      dispatch(setMovie(res.data))
    }).catch(err => console.log(err))
  }
}
export const resetMovie = () => {
  return {
    type: actionType.RESET_MOVIE
  }
}

