import axios from 'axios';

export const getPropertyById = async (propertyId) => {
    const response = await axios.get("http://localhost:4000/api/property/"+propertyId);
    const properties = response.data;
    return properties;
}