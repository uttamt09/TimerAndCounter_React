const redux = require("redux");
import {combineReducers} from "redux";
const { timerReducer } = require("./redux/reducers/timerReducer");
const {counterReducer} = require("./redux/reducers/counterReducer");

const result = combineReducers({
    timerReducer,
    counterReducer
})

export const store = redux.createStore(result);
