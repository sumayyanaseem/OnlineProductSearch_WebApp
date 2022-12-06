import axios from "axios";
const BASE_URL = 'http://localhost:4000'

export const register = async (newuser) => {
    console.log("in user service")
    console.log(newuser)
   const resp =  axios.post(`http://localhost:4000/api/register`, newuser);
   return resp;
}


export const getDetailsByUserName = async (userName) => {
    const resp =  axios.get("http://localhost:4000/api/user/"+ userName);
    return resp;
}

export const login = async (user) => {
    const response =  axios.post(`http://localhost:4000/api/login`, user)
    return response;
}

export const profile = async () => {
    console.log("inside service profile")
    const response = await axios.post(`http://localhost:4000/api/profile`)
    console.log(response.data)
    console.log("after service profile")
    return response.data
}

export const logout = async () => {
    const response = await axios.post(`http://localhost:4000/logout`)
    return response.data;
}
