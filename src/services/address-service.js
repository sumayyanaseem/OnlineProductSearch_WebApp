import { axiosRequest } from './utils/axios';
const API_BASE = "http://localhost:4000/api";

export const addUserAddress = async (addAddressRequest) => {
    const response = await axiosRequest.post(`${API_BASE}/user-addresses`, addAddressRequest);
    return response.data;
}

export const findUserAddresses = async () => {
    const response = await axiosRequest.get(`${API_BASE}/user-addresses`);
    return response.data;
}