import {instanceAxios} from "./usersAPI";
import {authThunkCreator, getCaptchaURL, setUser} from "redux/userAuthReducer";
import {stopSubmit} from "redux-form";
import {AppThunkDispatch} from "redux/redux-store";

export const authAPI = {
    authMe() {
        return instanceAxios.get(`auth/me`).then(res => res.data)
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha?: string) {
        return instanceAxios.post(`auth/login`, {email, password, rememberMe, captcha})
            .then(res => res.data)
    },
    logout() {
        return instanceAxios.delete(`auth/login`).then(res => res.data)
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha?: string) => (dispatch: AppThunkDispatch) => {
    authAPI.login(email, password, rememberMe, captcha)
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(authThunkCreator())
            } else {
                if (res.resultCode === 10) {
                    dispatch(getCaptchaURL())
                }
                let messages = res.messages.length > 0 ? res.messages[0] : 'some error'
                dispatch(stopSubmit('login', {_error: messages}))
            }
        })
}

export const logout = () => (dispatch: AppThunkDispatch) => {
    authAPI.logout()
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(setUser('', '', '', false))
            }
        })
}