import {combineReducers, createStore} from "redux";
import {messageReducer} from "./message-reducer";
import {mainPagePostReducer} from "./mainPagePostReducer";

let rootReducer = combineReducers({
    dialogsPages: messageReducer,
    mainPages: mainPagePostReducer,
})

export let store = createStore(rootReducer)
export type rootReducerType = ReturnType<typeof rootReducer>

export type StoreType = typeof store