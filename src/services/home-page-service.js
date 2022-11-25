import axios from 'axios';
const API_BASE = "http://localhost:4000/api";
const TUITS_API = `${API_BASE}`;


export const getAllProperties = async (userID) => {
    const response = await axios.get(`http://localhost:4000/api/properties?user=${userID}`);
    const properties = response.data;
    return properties;
}


