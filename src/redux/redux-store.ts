import {applyMiddleware, combineReducers, createStore} from "redux";
import {messageReducer} from "./message-reducer";
import {mainPagePostReducer} from "./mainPagePostReducer";
import {UsersReducer} from "./usersReducer";
import {userAuthReducer} from "./userAuthReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    dialogsPages: messageReducer,
    mainPages: mainPagePostReducer,
    usersPage: UsersReducer,
    userAuth: userAuthReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
export type rootReducerType = ReturnType<typeof rootReducer>
//@ts-ignore
window.store = store