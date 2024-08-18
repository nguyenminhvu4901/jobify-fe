import axiosInstance from '@/libs/axios';

const API = {
    login: (username: string, password: string) => {
        return axiosInstance.post('/auth/login', { username, password });
    },
};

export default API;