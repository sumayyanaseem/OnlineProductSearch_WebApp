import { createSlice } from "@reduxjs/toolkit";
import { createReviewThunk, findReviewsThunkByProductId, deleteReviewThunk, updateReviewThunk }
    from "../../services/reviews-thunks";

const initialState = {
    reviews: [],
    reviewsLoading: false
}

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    extraReducers: {
        [findReviewsThunkByProductId.pending]:
            (state) => {
                console.log("reducer in pending")
                state.reviewsLoading = true
                state.reviews = []
            },
        [findReviewsThunkByProductId.fulfilled]:
            (state, { payload }) => {
                console.log("reducer in fulfilled")
                state.reviewsLoading = false
                state.reviews = payload
            },
        [findReviewsThunkByProductId.rejected]:
            (state) => {
                console.log("reducer in rejected")
                state.reviewsLoading = false
            },
        [createReviewThunk.fulfilled]:
            (state, { payload }) => {
                state.reviewsLoading = false
                state.reviews = [payload, ...state.reviews]
                console.log(state.reviews)
            },
        [deleteReviewThunk.fulfilled]:
            (state, { payload }) => {
                state.reviewsLoading = false
                state.reviews = state.reviews
                    .filter(r => r.id !== payload)
            },
        [updateReviewThunk.fulfilled]:
            (state, { payload }) => {
                state.reviewsLoading = false
                const reviewsNdx = state.reviews
                    .findIndex((r) => r._id === payload._id)
                state.reviews[reviewsNdx] = {
                    ...state.reviews[reviewsNdx],
                    ...payload
                }
            }

    }
});

export const { createReview, deleteReview } = reviewsSlice.actions;

export default reviewsSlice.reducer;