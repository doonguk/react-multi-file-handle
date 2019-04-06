import *as modules from './modules'
import { createStore, combineReducers} from "redux"

const reducers = combineReducers({ ...modules})

const config = createStore(reducers)

export default config