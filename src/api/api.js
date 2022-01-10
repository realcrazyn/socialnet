import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '28ca6091-549e-4a15-802d-2bbd0562d2d5',
  },
})

export const usersAPI = {
  getUsers(pageNumber = 1, pageSize = 10) {
    return instance
      .get(`users?page=${pageNumber}&count=${pageSize}`)
      .then((res) => res.data)
  },
  follow(userID) {
    return instance.post(`follow/${userID}`)
  },
  unfollow(userID) {
    return instance.delete(`follow/${userID}`)
  },
  getProfile(userID) {
    return instance.get(`profile/${userID}`)
  },
}

export const authAPI = {
  me() {
    return instance.get('auth/me')
  },
}
