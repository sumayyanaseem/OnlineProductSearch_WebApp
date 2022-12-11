import { createAsyncThunk } from "@reduxjs/toolkit"
import * as service from "./home-page-service.js"

export const findPropertiesThunk = createAsyncThunk(
    'properties/findProperties', async (userID) =>
    await service.getAllProperties(userID)
)

export const findProductsThunk = createAsyncThunk(
    'products/findProducts', async ({ userID = null, categoryName = null, controllerSignal=null }) => {
        console.log("USERID is",userID)
        return await service.getAllProducts(userID, categoryName, controllerSignal)
    }
)

export const createProductsThunk = createAsyncThunk(
    'products/createProduct', async (product) => {
        return await service.createProduct(product)
    }
)