import axios from 'axios';
import { baseUrl } from 'constants/api';
import instance from './index';
import { getLocalStorage } from 'utils/localStorage';

const URL = `${baseUrl}/api`

//auth
export const signIn = (data) => axios.post(`${URL}/auth/signin`, data);

export const signUp = (data) => axios.post(`${URL}/auth/signup`, data);

export const signOut = () => axios.post(`${URL}/auth/signout`, {
    refreshToken: getLocalStorage('refreshToken')
});

//user
export const getUser = () => instance.get('/user', {
    headers: {
        'Authorization': `Bearer ${getLocalStorage('accessToken')}`
    }
});

export const getAllUsers = () => instance.get('/user/all', {
    headers: {
        'Authorization': `Bearer ${getLocalStorage('accessToken')}`
    }
})

//status

export const getStatus = () => instance.get('/status')

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