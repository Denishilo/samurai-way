import {instanceAxios} from "./usersAPI";
import {Dispatch} from "redux";
import {authThunkCreator, setUser} from "../redux/userAuthReducer";

export const authAPI = {
    authMe() {
        return instanceAxios.get(`auth/me`).then(res => {
            console.log('res', res);
            return res.data
        })
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instanceAxios.post(`auth/login`, {email, password, rememberMe})
            .then(res => {
            console.log('res', res);
            return res.data
        })
    },
    logout() {
        return instanceAxios.delete(`auth/login`,).then(res => {
            console.log('res', res);
            return res.data
        })
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<any>) => {
    authAPI.login(email, password, rememberMe)
        .then(res => {
            console.log(res.resultCode)
            if (res.resultCode === 0) {
                console.log('dispatch')
                dispatch(authThunkCreator())
            }
        })
}

export const logout = () => (dispatch: Dispatch<any>) => {
    authAPI.logout()
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(setUser('', '', '', false))
            }
        })
}