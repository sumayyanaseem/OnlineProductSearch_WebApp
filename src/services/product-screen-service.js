import { axiosRequest } from './utils/axios';

export const getProductById = async (productId) => {
    console.log("getProductById " + productId)
    const response = await axiosRequest.get("http://localhost:4000/api/products/" + productId);
    const products = response.data;
    console.log("response from server products by ID " + products)
    return products;
}

export const getProductsByCategory = async (category) => {
    const response = await axiosRequest.get(`http://localhost:4000/api/search?category=${category}`);
    const products = response.data;
    console.log("from server " + products)
    return products;
}