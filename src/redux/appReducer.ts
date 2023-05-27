import {authThunkCreator} from "./userAuthReducer";
import {AppThunkDispatch} from "./redux-store";

export const AppReducer = (state: InitialStateType = initialState, action: AppActionType): InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {...state, initialized: true}
        default:
            return state
    }
}

export const initializedSuccessAC = () => ({type: SET_INITIALIZED} as const)

export const initializeApp = () => async (dispatch: AppThunkDispatch) => {
    await dispatch(authThunkCreator())
    dispatch(initializedSuccessAC())
}

const SET_INITIALIZED = 'SET_INITIALIZED'

const initialState = {
    initialized: false
}
////////types

type InitialStateType = typeof initialState
type AppActionType = ReturnType<typeof initializedSuccessAC>