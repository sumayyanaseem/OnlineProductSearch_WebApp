import axios from 'axios';
const API_BASE = "http://localhost:4000/api";


export const getAllProperties = async (userID) => {
    const response = await axios.get(`${API_BASE}/products?user=${userID}`);
    const properties = response.data;
    return properties;
}

export const getAllProducts = async (userID, categoryName) => {
    console.log("categoryName", categoryName)
    const response = await axios.get(`${API_BASE}/products?user=${userID}&category=${categoryName}`);
    const properties = response.data;
    return properties;
}

export const createProduct = async (product) => {
    const response = await axios.post(
        `${API_BASE}/products`, product,
        {
            'Content-Type': 'multipart/form-data'
        });
    const properties = response.data;
    return properties;
}


