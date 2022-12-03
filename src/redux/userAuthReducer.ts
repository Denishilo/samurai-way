import {Dispatch} from "redux";
import {authAPI} from "../api/authAPI";

export type UserAuthType = {
    data:UserDataType
}

export type UserDataType = {
    id: null | string
    login: null | string
    email: null | string
    isUserAuth: boolean
}

type AllUserAuthActionType = ReturnType<typeof setUser>

const initialState = {
    data:{
        id: null,
        login: null,
        email: null,
        isUserAuth: false
    }
}

export const userAuthReducer = (state: UserAuthType = initialState, action: AllUserAuthActionType): UserAuthType => {
    switch (action.type) {
        case "SET-USER-AUTH":
           return {...state, data:{...state.data, ...action.payload}}

    }
    return state
}

export const setUser = (id: string, login: string, email: string, isUserAuth: boolean) => {
    return {
        type: 'SET-USER-AUTH',
        payload: {
            id,
            login,
            email,
            isUserAuth
        }
    } as const
}

export const authThunkCreator = () => (dispatch:Dispatch) =>{
    authAPI.authMe().then(res=>
        dispatch(setUser(res.data.id, res.data.login,res.data.email,true )))
}