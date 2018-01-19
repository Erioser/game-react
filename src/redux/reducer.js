
import {combineReducers} from 'redux'

import User from './reducers/User'
import GameType from './reducers/GameType'

const reducer = combineReducers({User,GameType})

export default reducer 