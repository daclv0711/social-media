import axios from 'axios';
import { baseUrl } from 'constants/api';
import { getLocalStorage, setLocalStorage } from 'utils/localStorage';

const instance = axios.create({
    baseURL: `${baseUrl}/api`,
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
        })

    }
    return error;
});

export default instance;