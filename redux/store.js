import { combineReducers, createStore } from "redux";
import loginReducer from "./login-reducer"

let reducer = combineReducers({
    login: loginReducer
})

let store = createStore(reducer)

export default store



