import axios from "axios";
const BASE_URL = 'http://localhost:4000'

export const register = async (newuser) => {
    console.log("in user service")
    console.log(newuser)
    const response = await axios.post(`http://localhost:4000/api/register`, newuser)
    console.log(newuser)
    return response.data;
}

export const login = async (user) => {
    const response = await axios.post(`${BASE_URL}/login`, user)
    console.log(response.data);
    return response.data;
}

export const logout = async () => {
    const response = await axios.post(`${BASE_URL}/logout`)
    return response.data;
}
