// src/services/api.ts
import axiosInstance from '@/libs/axios';
import { AxiosHeaders } from 'axios';

interface RequestHeaders extends AxiosHeaders {
    [key: string]: string;
}

export const get = async<R>(url: string, params?: any, headers?: RequestHeaders): Promise<AxiosResponse<R>> => {
    return axiosInstance.get(url, { params, headers });
};

export const post = async <T, R>(url: string, data: T, headers?: RequestHeaders): Promise<AxiosResponse<R>> => {
    return axiosInstance.post(url, data, { headers });
};

export const put = async <T, R>(url: string, data: T, headers?: RequestHeaders): Promise<AxiosResponse<R>> => {
    return axiosInstance.put(url, data, { headers });
};

export const patch = async <T, R>(url: string, data: T, headers?: RequestHeaders): Promise<AxiosResponse<R>> => {
    return axiosInstance.patch(url, data, { headers });
};

export const _delete = async<R>(url: string, data?: any, headers?: RequestHeaders): Promise<AxiosResponse<R>> => {
    const config: AxiosRequestConfig = {
        headers,
        data,
    };
    return axiosInstance.delete(url, config);
};
