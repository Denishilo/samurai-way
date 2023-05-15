import {authThunkCreator} from "./userAuthReducer";
import {AppThunkDispatch} from "./redux-store";

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
        case SET_INITIALIZED:
            return {...state, initialized:true }
        default:
            return state
    }
}

export const initializedSuccessAC =()=> ({type: SET_INITIALIZED} as const)

export const initializeApp = () => (dispatch:AppThunkDispatch) =>{
    let promise = dispatch(authThunkCreator())
    promise.then(()=>dispatch(initializedSuccessAC()))
}