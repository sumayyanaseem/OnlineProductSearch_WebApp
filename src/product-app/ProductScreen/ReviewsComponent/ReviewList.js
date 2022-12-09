import React from "react";
import ReviewsComponent from "./ReviewsComponent.js";
import './index.css'
import AddReviewComponent from "./AddReviewComponent.js";
import { useSelector } from "react-redux";

const ReviewList = ({ review }) => {
    const { currentUser } = useSelector((state) => state.user);
    return (
        <div className="wd-review-list-container">
            <div className="wd-review-header">
                REVIEWS
            </div>
            {
                currentUser?.role === 'Buyer' &&
                <AddReviewComponent />
            }
            {
                review.map(r => <ReviewsComponent key={r.id} review={r} />)
            }
        </div>
    );
};
export default ReviewList;