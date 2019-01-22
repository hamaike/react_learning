import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import newUserInfo from './newUserInfo'

export default combineReducers({
  todos,
  visibilityFilter,
  newUserInfo
})