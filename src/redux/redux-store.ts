import {combineReducers, createStore} from "redux";
import {messageReducer} from "./message-reducer";
import {mainPagePostReducer} from "./mainPagePostReducer";
import {UsersReducer} from "./usersReducer";
import {userAuthReducer} from "./userAuthReducer";


const rootReducer = combineReducers({
    dialogsPages: messageReducer,
    mainPages: mainPagePostReducer,
    usersPage: UsersReducer,
    userAuth:userAuthReducer
})

export const store = createStore(rootReducer)
export type rootReducerType = ReturnType<typeof rootReducer>
