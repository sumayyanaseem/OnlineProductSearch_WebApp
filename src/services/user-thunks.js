import {createAsyncThunk} from "@reduxjs/toolkit";
import {register, login, logout, profile} from "./user-service";


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
    async (newuser) => await login(newuser)
)

export const profileThunk = createAsyncThunk(
    'profile',
    async () => await profile()
)