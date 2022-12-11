import axios from "axios";

export const instanceAxios = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'f746c884-1e65-41cc-803b-7578faa18b3d'
    }
})

export const mainProfileAPI = {
    getProfile(userId: string) {
        return instanceAxios.get(`profile/${userId}`)
    },
    getStatus(userId: string){
        return instanceAxios.get(`profile/status/${userId}`)
    },
    updateStatus(status:string){
        return instanceAxios.put(`profile/status/`, {status})
    }
}