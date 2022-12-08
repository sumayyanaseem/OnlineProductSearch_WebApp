import { axiosRequest } from './utils/axios';
const API_BASE = "http://localhost:4000/api";

export const getCategories = async () => {
    const response = await axiosRequest.get(`${API_BASE}/products/categories`);
    const properties = response.data;
    return properties;
}
