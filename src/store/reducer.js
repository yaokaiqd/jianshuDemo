import {combineReducers} from 'redux-immutable'
import {reducer as headerReducer} from '../common/Header/store'
import {reducer as homeReducer} from '../page/Home/store'
import {reducer as loginReducer} from '../page/login/store'
import {reducer as detailReducer} from '../page/Detail/store'
const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  login: loginReducer,
  detail: detailReducer,
})

export default reducer