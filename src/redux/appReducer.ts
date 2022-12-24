import {Dispatch} from "redux";
import {authThunkCreator} from "./userAuthReducer";

const SET_INITIALIZED = 'SET_INITIALIZED'

type InitialStateType = {
    initialized: boolean
}
type AppActionType = ReturnType<typeof initializedSuccessAC>

const initialState = {
    initialized: false
}


export const AppReducer = (state: InitialStateType = initialState , action: AppActionType): InitialStateType => {
    switch (action.type) {
        case "SET_INITIALIZED":
            return {...state, initialized:true }
        default:
            return state
    }
}

export const initializedSuccessAC =()=> ({type: SET_INITIALIZED})

export const initializeApp = () => (dispatch:Dispatch<any>) =>{
    let promise = dispatch(authThunkCreator())
    // @ts-ignore
    promise.then(()=>dispatch(initializedSuccessAC()))
    //console.log('promise', promise)
}