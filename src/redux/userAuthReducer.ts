import {authAPI} from "api/authAPI";
import {AppThunkDispatch} from "./redux-store";
import {securityAPI} from "api/securityAPI";

const initialState = {
    data: {
        id: null,
        login: null,
        email: null,
        isUserAuth: false
    },
    captchaUrl: '',
}

export const userAuthReducer = (state: UserAuthType = initialState, action: AllUserAuthActionType): UserAuthType => {
    switch (action.type) {
        case "SET-USER-AUTH":
            return {...state, data: action.payload}
        case "SET-CAPTCHA":
            return {...state, captchaUrl: action.payload.url}
    }
    return state
}
////////// ACTION CREATORS
export const setUser = (id: string, login: string, email: string, isUserAuth: boolean) => {
    return {
        type: 'SET-USER-AUTH',
        payload: {
            id,
            login,
            email,
            isUserAuth,
        }
    } as const
}

export const setCaptchaUrl = (url: string) => {
    return {
        type: 'SET-CAPTCHA',
        payload: {
            url
        }
    } as const
}

///////// THUNK CREATORS

export const authThunkCreator = () => async (dispatch: AppThunkDispatch) => {
    const res = await authAPI.authMe()

    if (res.resultCode === 0){
        dispatch(setUser(res.data.id, res.data.login, res.data.email, true))
    }

}

export const getCaptchaURL = () => async (dispatch: AppThunkDispatch) => {
    const res = await securityAPI.getCaptchaURL()
    dispatch(setCaptchaUrl(res.data.url))
}

//////types
export type UserAuthType = {
    data: UserDataType,
    captchaUrl: string
}

export type UserDataType = {
    id: null | string
    login: null | string
    email: null | string
    isUserAuth: boolean
}

type AllUserAuthActionType = ReturnType<typeof setUser> | ReturnType<typeof setCaptchaUrl>