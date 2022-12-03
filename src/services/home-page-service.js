import axios from 'axios';
const API_BASE = "http://localhost:4000/api";


export const getAllProperties = async (userID) => {
    const response = await axios.get(`${API_BASE}/products?user=${userID}`);
    const properties = response.data;
    return properties;
}


