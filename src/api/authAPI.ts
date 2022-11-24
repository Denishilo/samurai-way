import {instanceAxios} from "./usersAPI";

export const authAPI={
    authMe(){
        return instanceAxios.get(`auth/me`).then(res=>res.data)
    }
}