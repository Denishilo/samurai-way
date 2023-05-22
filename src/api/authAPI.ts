import {instanceAxios} from "./usersAPI";
import {Dispatch} from "redux";
import {authThunkCreator, getCaptchaURL, setUser} from "redux/userAuthReducer";
import {stopSubmit} from "redux-form";

export const authAPI = {
    authMe() {
        return instanceAxios.get(`auth/me`)
            .then(res => res.data)
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha?: string) {
        console.log(captcha)
        console.log(email)
        return instanceAxios.post(`auth/login`, {email, password, rememberMe, captcha})
            .then(res => res.data)
    },
    logout() {
        return instanceAxios.delete(`auth/login`)
            .then(res => res.data)
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha?:string) => (dispatch: Dispatch<any>) => {
    authAPI.login(email, password, rememberMe, captcha)
        .then(res => {
            console.log(res)
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

export const logout = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(setUser('', '', '', false))
            }
        })
}