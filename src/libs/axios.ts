import axios, { AxiosInstance } from 'axios';
import Cookies from 'js-cookie';

const api: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8040/api',
    timeout: 10000,
    header: {
        'Content-Type': 'application/json',
        withCredentials: true,
    },
});

api.interceptors.request.use(
    (config) => {
        const locale = Cookies.get('locale') || 'vi';
        if (config.headers) {
            config.headers['Accept-Language'] = locale;
        }

        const token = localStorage.getItem('token');
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;
