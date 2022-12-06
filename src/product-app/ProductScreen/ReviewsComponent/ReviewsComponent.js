import React from "react";
import {useDispatch} from "react-redux";
import {deleteReviewThunk} from "../../../services/reviews-thunks";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

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
                    <img src={review.image??'/assets/default_dp.jpg'} className="rounded-circle" height={50} width={50} />
                </div>
                <p><span className="fw-bolder wd-reviews-font"><b>{review.userFirstName} {review.userLastName}</b></span>
                    <span className="text-secondary wd-lightgrey">  {review.date}</span>
                    {
                        <i className="fa fa-x float-end wd-lightgrey"
                           onClick={() => deleteReviewHandler(review._id)}></i>
                    }
                <br/></p>
            </div>
            <div className="me-3"><b>Rating: </b>{review.rating}</div>
            <div className="mb-3 me-3">{review.comment}</div>
        </div>
    );
}
export default Review;