import {combineReducers, createStore} from "redux";
import {messageReducer} from "./message-reducer";
import {mainPagePostReducer} from "./mainPagePostReducer";
import {UsersReducer} from "./usersReducer";


let rootReducer = combineReducers({
    dialogsPages: messageReducer,
    mainPages: mainPagePostReducer,
    usersPage: UsersReducer
})

export let store = createStore(rootReducer)
export type rootReducerType = ReturnType<typeof rootReducer>
