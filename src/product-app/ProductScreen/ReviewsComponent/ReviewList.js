import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ReviewsComponent from "./ReviewsComponent.js";

import {createReviewThunk, updateReviewThunk} from "../../../services/reviews-thunks";
import {useLocation} from "react-router-dom";
import {Rating} from "@mui/material";

const ReviewList = ({review}) => {
    let [getReview, setReview] = useState('');
    let [getRating, setRating] = useState('');
    const dispatch = useDispatch();

    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const {currentUser} = useSelector((state) => state.user);

    const reviewClickHandler = () => {
        const newReview = {
             comment: getReview,
             _id: (new Date()).getTime(),
             product_id: active,
             user_id: currentUser._id,
             userFirstName: currentUser.firstName,
             userLastName: currentUser.lastName,
             rating: getRating,
             date: today.toLocaleDateString(),
            getReview: ''
        }

        dispatch(createReviewThunk(newReview));
    }

     return(
        <ul className="list-group">
            <div>
               <hr/>
                <div className="font-weight-bolder wd-review">
                    <b>REVIEWS</b>
                </div>
            </div>

            {
              review.map(r => <ReviewsComponent key={r._id} review={r}/>)
            }

             <div className="row ms-1 mt-4">
                <div className="row col-10">
                    {
                        currentUser.role === 'User' &&
                        <div className="col-10">
                        <textarea value={getReview} placeholder="Write a Review"
                                  className="form-control square-pill ps-5"
                                  onChange={(event) => setReview(event.target.value)}>
                        </textarea>
                        </div>
                    }
                    {
                        profile.role === 'user' &&
                        <div className="col-2">
                            <Rating
                                name="simple-controlled"
                                value={getRating}
                                onChange={(event) =>  setRating(event.target.value)}
                            />
                        </div>
                    }

                </div>
                <div className="col-2">
                    {
                        currentUser.role === 'User' &&
                        <button className="rounded-pill btn btn-primary float-end mt-2 pe-3 fw-bold"
                                onClick={reviewClickHandler}>
                            Submit
                        </button>
                    }
                </div>

            </div>
        </ul>
     );
 };
export default ReviewList;