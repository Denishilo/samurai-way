import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {messageReducer} from "./message-reducer";
import {mainPagePostReducer} from "./mainPagePostReducer";
import {UsersReducer} from "./usersReducer";
import {userAuthReducer} from "./userAuthReducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import {AppReducer} from "./appReducer";

const rootReducer = combineReducers({
    dialogsPages: messageReducer,
    mainPages: mainPagePostReducer,
    usersPage: UsersReducer,
    userAuth: userAuthReducer,
    form: formReducer,
    app:AppReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
export type rootReducerType = ReturnType<typeof rootReducer>
export type AppThunkDispatch = ThunkDispatch<rootReducerType, any, AnyAction>

//@ts-ignore
window.store = store