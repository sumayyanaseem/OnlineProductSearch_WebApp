import { createAsyncThunk } from "@reduxjs/toolkit"
import * as service from "./home-page-service.js"

export const findPropertiesThunk = createAsyncThunk(
    'properties/findProperties', async (userID) =>
    await service.getAllProperties(userID)
)

export const findProductsThunk = createAsyncThunk(
    'products/findProducts', async ({ userID, categoryName = null }) => {
        console.log("categoryName", categoryName)
        return await service.getAllProducts(userID, categoryName)
    }
)