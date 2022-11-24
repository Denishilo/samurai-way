import {instanceAxios} from "./usersAPI";

export const followAPI = {
    follow (id:string){
        return instanceAxios.post(`follow/${id}`).then(res=>res.data.resultCode)
    },
    unfollow(id:string){
        return instanceAxios.delete(`follow/${id}`).then(res=>res.data.resultCode)
    }
}