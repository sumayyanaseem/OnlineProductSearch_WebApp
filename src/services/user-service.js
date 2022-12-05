import axios from "axios";
const BASE_URL = 'http://localhost:4000'

export const register = async (newuser) => {
    console.log("in user service")
    console.log(newuser)
    const response = await axios.post(`http://localhost:4000/api/register`, newuser)
    console.log(newuser)
    return response.data;
}

export const login = async (newuser) => {
    const response = await axios.post(`http://localhost:4000/api/login`, newuser)
    console.log(response.data);
    return response.data;
}

export const profile = async () => {
    const response = await axios.post(`http://localhost:4000/profile`)
    return response.data
}

export const logout = async () => {
    const response = await axios.post(`http://localhost:4000/logout`)
    return response.data;
}
