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



