import { createAsyncThunk } from "@reduxjs/toolkit"
import * as service from "./order-service"

export const createOrderThunk = createAsyncThunk(
    'user/createOrder', async (orderRequest) =>
    await service.createOrder(orderRequest)
)

export const getOrdersThunk = createAsyncThunk(
    'user/getOrders', async () =>
    await service.getOrders()
)