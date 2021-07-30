import { combineReducers } from 'redux'
import userReducer from './usersReducer'
import historyReducer from './historyReducer'

export default combineReducers({
  usersList: userReducer ,
  betList: historyReducer
})