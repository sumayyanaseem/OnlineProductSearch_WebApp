import { axiosRequest } from './utils/axios';

export const getAllProductRequests = async () => {
    const response = await axiosRequest.get("http://localhost:4000/api/products/requests");
    const products = response.data;
    return products;
}

export const approveProductRequest = async (id) => {
    const response = await axiosRequest.get("http://localhost:4000/api/products/request/approve/" + id);
    const products = response.data;
    return products;
}

export const rejectProductRequest = async (id) => {
    const response = await axiosRequest.get("http://localhost:4000/api/products/request/reject/" + id);
    const products = response.data;
    return products;
}




