import axios from 'axios';
const API_BASE = "http://localhost:4000/api/reviews";

export const createReview = async (newReview) => {
    const response = await axios.post("http://localhost:4000/api/reviews",newReview);
    return response.data;
}
export const findReviewsByProductId = async (productId) => {
    const response = await axios.get(`${API_BASE}/${productId}`);
    const reviews = response.data;
    return reviews;
}

export const findReviewsByUserId = async (id) => {
    const response =  axios.get(`${API_BASE}?uid=${id}`);
    return response;
}


export const deleteReview = async (rid) => {
    const response = await axios
        .delete(`${API_BASE}/${rid}`)
    return response.data
}

export const updateReview = async (review) => {
    const response = await axios
        .put(`${API_BASE}/${review._id}`, review);
    return review;
}
