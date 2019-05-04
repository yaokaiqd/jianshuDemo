import * as actionType from './constants'

export const changeLog = () => {
  return {
    type: actionType.CHANGE_LOGTRUE,
    value: true
  }
}
export const changeLogStatus = () => {
  return {
    type: actionType.CHANGE_LOGFALSE,
    value: false,
  }
}