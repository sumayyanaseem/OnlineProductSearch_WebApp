import { createAsyncThunk } from "@reduxjs/toolkit";
import { register, logout, profile, getUser } from "./user-service";


export const registerThunk = createAsyncThunk(
    'register',
    async (newuser) => await register(newuser)
)

export const logoutThunk = createAsyncThunk(
    'logout',
    async () => await logout()
)

export const profileThunk = createAsyncThunk(
    'profile',
    async () => await profile()
)

export const getUserThunk = createAsyncThunk(
    'user',
    async () => await getUser()
)