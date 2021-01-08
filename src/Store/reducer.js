import { combineReducers } from 'redux'
import budgetList from './budgetList/reducer'
import accountList from './createAccount/reducer'
const rootReducer = combineReducers({
    budgetList,
    accountList
  })


export default rootReducer