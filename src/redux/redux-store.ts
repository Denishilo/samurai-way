import {combineReducers, createStore} from "redux";
import {messageReducer} from "./message-reducer";
import {mainPagePostReducer} from "./mainPagePostReducer";
import {UsersReducer} from "./usersReducer";


const rootReducer = combineReducers({
    dialogsPages: messageReducer,
    mainPages: mainPagePostReducer,
    usersPage: UsersReducer
})

export const store = createStore(rootReducer)
export type rootReducerType = ReturnType<typeof rootReducer>
