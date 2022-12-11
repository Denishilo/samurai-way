import {instanceAxios} from "./usersAPI";

export const authAPI={
    authMe(){
        return instanceAxios.get(`auth/me`).then(res=>{
            console.log('res', res);
             return res.data
        })
    }
}