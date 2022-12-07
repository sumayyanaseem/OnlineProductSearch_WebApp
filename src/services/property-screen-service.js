import { axiosRequest } from './utils/axios';

export const getPropertyById = async (propertyId) => {
    const response = await axiosRequest.get("http://localhost:4000/api/property/" + propertyId);
    const properties = response.data;
    return properties;
}