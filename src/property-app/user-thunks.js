import {createAsyncThunk} from "@reduxjs/toolkit";
import {register, login, logout} from "./../property-app/user-service";


export const registerThunk = createAsyncThunk(
    'register',
    async (newuser) => await register(newuser)
)

export const logoutThunk = createAsyncThunk(
    'logout',
    async () => await logout()
)

export const loginThunk = createAsyncThunk(
    'login',
    async (user) => await login(user)
)
