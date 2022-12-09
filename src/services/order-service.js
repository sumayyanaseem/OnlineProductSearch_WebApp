import { axiosRequest } from './utils/axios';
const API_BASE = "http://localhost:4000/api";

export const createOrder = async (createOrderRequest) => {
    const response = await axiosRequest.post(`${API_BASE}/orders`, createOrderRequest);
    return response.data;
}

export const getOrders = async () => {
    const response = await axiosRequest.get(`${API_BASE}/orders`);
    return response.data;
}