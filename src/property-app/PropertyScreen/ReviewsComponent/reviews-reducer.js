import { createSlice } from "@reduxjs/toolkit";
import reviews from "../../../assets/Reviews.json";

const currentUser = {
 "username": "Admin",
 "image": ""
};

const templateReview = {
 ...currentUser,
 "time": "2h",
}


const reviewsSlice = createSlice({
 name: 'reviews',
 initialState: reviews,
 reducers: {
    createReview(state, action) {
      state.unshift({
        ...action.payload,
        ...templateReview,
        _id: (new Date()).getTime(),
      })
    }
 }
});

export const {createReview} = reviewsSlice.actions;

export default reviewsSlice.reducer;