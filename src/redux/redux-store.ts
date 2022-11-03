import {combineReducers, createStore} from "redux";
import {messageReducer} from "./message-reducer";
import {mainPagePostReducer} from "./mainPagePostReducer";
import {useReducer} from "react";

let rootReducer = combineReducers({
    dialogsPages: messageReducer,
    mainPages: mainPagePostReducer,
    usersPage: useReducer,
})

export let store = createStore(rootReducer)
export type rootReducerType = ReturnType<typeof rootReducer>
