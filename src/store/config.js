import { createStore, combineReducers, compose, applyMiddleware} from "redux"
import *as modules from './modules'

const reducers = combineReducers({...modules})
const middlewares = []

//Redux Devtools
const isDev = process.env.NODE_ENV === 'development'
const devtools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const composeEnhancers = devtools || compose

//preloadedState is for SSR
const configure = () => createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)))

export default configure