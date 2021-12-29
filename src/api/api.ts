import axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {"API-KEY": "37284ad1-011c-4527-aefd-0eb066a2b6e5"}
})

export const usersAPI = {
    getUsers: (currentPage: number = 1, pageSize: number = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followUser: (id: number) => {
        return instance.post(`follow/${id}`,)
            .then(response => response.data.resultCode)
            .catch(e => console.log('fooo'))
    },
    unfollowUser: (id: number) => {
        return instance.delete(`follow/${id}`,)
            .then(response => response.data.resultCode)
            .catch(e => console.log('unfoooo'))
    },
    getProfile: (userId: string) => {
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile: (userId: string) => {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus: (userId: string) => {
        return instance.get(`profile/status/${userId}`)
            .then(response => {
                debugger
                return response.data
            })
    },
    updateStatus: (status: string) => {
        return instance.put(`profile/status`, {status})
            .then(response => {
                return response.data
            })
    }
}

export const authAPI = {
    getAuth: () => {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    }
}