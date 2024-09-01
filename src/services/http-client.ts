import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';

export interface IHttpParameters {
    [key: string]: string;
}

// export const BASE_URL = process.env.SERVER_API_URL;
export const BASE_URL = '';

const httpClient = axios.create({
    baseURL: `${BASE_URL}`,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

    },
    withCredentials: true
});

export function HttpInterceptor({children}: any) {

    const navigate = useNavigate();

    useEffect(() => {
        httpClient.interceptors.response.use(
            response => {
                return response;
            },
            error => {
                // if (error.response && error.response.status === 401) {
                // } else {
                //     return Promise.reject(error);
                // }
            }
        )
    }, [navigate]);

    return children;
}

export function prepareParameters(parameters?: IHttpParameters): string {
    if (!parameters) return '';
    if (Object.keys(parameters).length === 0) return '';
    return '?' + Object.keys(parameters).map((key: string) => `${key}=${parameters[key]}`).join('&');
}

export default httpClient;
