import axios from 'axios';
import { baseUrl } from 'constants/api';
import { getLocalStorage, setLocalStorage } from 'utils/localStorage';

const instance = axios.create({
    baseURL: baseUrl,
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json'
    }
});

instance.interceptors.response.use((response) => {
    return response;
}, error => {
    if (error.response.status === 401) {
        return instance.post('/auth/refresh', {
            refreshToken: getLocalStorage('refreshToken')
        }).then(res => {
            const { token } = res.data;
            setLocalStorage('accessToken', token);
            const { config } = error.response;
            config.headers['Authorization'] = `Bearer ${token}`;
            return instance(config);
        }).catch(err => {
            console.log(err.response);
            if (err.response.data.message === 'Invalid token' && err.response.data.code === 400) {
                setLocalStorage('refreshToken', '');
                setLocalStorage('accessToken', '');
                window.location.href = '/';
            }
        })

    }
    return Promise.reject(error);
});

export default instance;