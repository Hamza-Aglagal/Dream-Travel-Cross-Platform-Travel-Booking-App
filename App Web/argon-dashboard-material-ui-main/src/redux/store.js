import {createStore, applyMiddleware} from 'redux'
import RootReducers from './reducers/RootReducers'
import { thunk } from 'redux-thunk'


const middleware = [thunk]

const Store = createStore(RootReducers, applyMiddleware(...middleware))


export default Store



