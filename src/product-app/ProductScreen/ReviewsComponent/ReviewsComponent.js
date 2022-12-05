import React from "react";
import {useDispatch} from "react-redux";
import {deleteReviewThunk} from "../../../services/reviews-thunks";

const Review = ({review}) =>
{

    const dispatch = useDispatch();
    const deleteReviewHandler = (id) => {
        dispatch(deleteReviewThunk(id));
    }
    console.log(review);
    return (
        <div className="row ms-1 mt-2">
            <div className="row mt-4">
                <div className="col-1">
                    <img src = {review.image??'/assets/default_dp.jpg'} className="rounded-circle" height={50} width={50}/>
                </div>
                <div className ="col">

                   <p><span className="fw-bolder"><b>{review.userFirstName} {review.userLastName}</b></span><br/>
                   <span class="text-secondary wd-lightgrey">{review.date}</span></p>
                </div>
            </div>
            <div className="me-3"><b>Rating: </b>{review.rating}</div>
            <div className="mb-3 me-3">{review.comment}</div>
        </div>
    );
}
export default Review;