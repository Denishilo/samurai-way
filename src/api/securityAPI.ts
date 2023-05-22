import {instanceAxios} from "api/usersAPI";

export const securityAPI = {
    getCaptchaURL(){
        return instanceAxios.get('/security/get-captcha-url')
    }
}