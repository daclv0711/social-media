import axios from 'axios';
import { baseUrl } from 'constants/api';
import instance from './index';
import { getLocalStorage } from 'utils/localStorage';


//auth
export const signIn = (data) => axios.post(`${baseUrl}/auth/signin`, data);

export const signUp = (data) => axios.post(`${baseUrl}/auth/signup`, data);

export const signOut = () => axios.post(`${baseUrl}/auth/signout`, {
    refreshToken: getLocalStorage('refreshToken')
});

export const getOtp = (data) => axios.post(`${baseUrl}/auth/otp`, data);

export const resetPassword = (data) => axios.post(`${baseUrl}/auth/reset-password`, data);
//user
export const getUser = () => instance.get('/user', {
    headers: {
        'Authorization': `Bearer ${getLocalStorage('accessToken')}`
    }
});

export const getAllUsers = () => instance.get('/user/allUser', {
    headers: {
        'Authorization': `Bearer ${getLocalStorage('accessToken')}`
    }
})

export const updateUser = (userId, data) => instance.put(`/user/${userId}`, data, {
    headers: {
        'Authorization': `Bearer ${getLocalStorage('accessToken')}`
    }
})

export const changePassword = (userId, data) => instance.put(`/user/change-password/${userId}`, data, {
    headers: {
        'Authorization': `Bearer ${getLocalStorage('accessToken')}`
    }
})
//status

export const getStatus = (skip) => instance.get(`/status?skip=${skip}`)

export const postStatus = (data) => instance.post('/status', data, {
    headers: {
        'Authorization': `Bearer ${getLocalStorage('accessToken')}`
    }
})

export const likeStatus = (data) => instance.put('/status/like', data, {
    headers: {
        'Authorization': `Bearer ${getLocalStorage('accessToken')}`
    }
})

export const updateStatus = (id, data) => instance.put(`/status/${id}`, data, {
    headers: {
        'Authorization': `Bearer ${getLocalStorage('accessToken')}`
    }
})

export const deleteStatus = (id) => instance.delete(`/status/${id}`, {
    headers: {
        'Authorization': `Bearer ${getLocalStorage('accessToken')}`
    }
})

//comment

export const getComment = () => instance.get(`/status/comment`)

export const createComment = (idStatus, data) => instance.post(`/status/${idStatus}/comment`, data, {
    headers: {
        'Authorization': `Bearer ${getLocalStorage('accessToken')}`
    }
})

export const updateComment = (idStatus, id, data) => instance.put(`/status/${idStatus}/comment/${id}`, data, {
    headers: {
        'Authorization': `Bearer ${getLocalStorage('accessToken')}`
    }
})

export const likeComment = (data) => instance.put(`/status/comment/likeComment`, data, {
    headers: {
        'Authorization': `Bearer ${getLocalStorage('accessToken')}`
    }
})

export const deleteComment = (idStatus, id) => instance.delete(`/status/${idStatus}/comment/${id}`, {
    headers: {
        'Authorization': `Bearer ${getLocalStorage('accessToken')}`
    }
})