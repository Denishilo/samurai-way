import {combineReducers, createStore} from "redux";
import {messageReducer} from "./message-reducer";
import {mainPagePostReducer} from "./mainPagePostReducer";

let reducers = combineReducers({
    dialogsPages: messageReducer,
    mainPages: mainPagePostReducer,
})

export let store = createStore(reducers)
export type StoreType = typeof store