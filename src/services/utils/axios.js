import axios from 'axios';

const axiosRequest = axios.create({
    baseURL: 'https://sample.com',
});

axiosRequest.interceptors.request.use(function (config) {
    const token = localStorage.getItem('accessToken');
    console.log("token", token)
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

export { axiosRequest };