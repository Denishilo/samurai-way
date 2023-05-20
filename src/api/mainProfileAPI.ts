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
    },
    updateAvatar(photo: File) {
        let formData = new FormData()
        formData.append('image', photo)
        return instanceAxios.put(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    }
}