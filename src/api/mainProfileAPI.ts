import {instanceAxios} from "./usersAPI";

export const mainProfileAPI = {
    getProfile(userId: string) {
        return instanceAxios.get(`profile/${userId}`)
    },
    getStatus(userId: string) {
        return instanceAxios.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instanceAxios.put(`profile/status/`, {status})
    }
}