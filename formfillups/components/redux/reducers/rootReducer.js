import account from './accountReducer'
import profile from './profileReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    account,profile
})

export default rootReducer 