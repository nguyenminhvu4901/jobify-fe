const API_ENDPOINTS = {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    GET_USER: (userId: string) => `/users/${userId}`,
    UPDATE_USER: (userId: string) => `/users/${userId}`,
    DELETE_USER: (userId: string) => `/users/${userId}`,
};

export default API_ENDPOINTS;
