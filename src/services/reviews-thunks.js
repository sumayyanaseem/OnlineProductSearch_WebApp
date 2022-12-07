import { createAsyncThunk } from "@reduxjs/toolkit"
import * as service from "./reviews-service"

export const findReviewsThunkByProductId = createAsyncThunk(
    'review/findReviewsByProductId', async (productId) =>
        await service.findReviewsByProductId(productId)
)

export const createReviewThunk = createAsyncThunk(
    'review/createReview', async (newReview) =>
        await service.createReview(newReview)
);

export const deleteReviewThunk = createAsyncThunk(
'review/deleteReview',
async (reviewId) => {
    await service.deleteReview(reviewId)
    return reviewId
})

export const updateReviewThunk =
    createAsyncThunk(
    'review/updateReview',
    async (review) =>
    await service.updateReview(review)
)