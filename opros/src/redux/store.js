import {createStore, compose} from 'redux'
import {combineReducers} from 'redux'
import {applyMiddleware} from 'redux'
import Middleware from 'redux-thunk'
import {homeReducer} from "./home-reducer";


let reducers = combineReducers(
    {
        home: homeReducer,
    }
)

const store = createStore(reducers, applyMiddleware(Middleware))

export default store