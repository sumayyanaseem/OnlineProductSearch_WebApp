import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ReviewsComponent from "./ReviewsComponent.js";

import {createReviewThunk, updateReviewThunk} from "../../../services/reviews-thunks";
import {useLocation} from "react-router-dom";

const ReviewList = ({review}) => {
    let [getReview, setReview] = useState('');
    let [getRating, setRating] = useState('');
    const dispatch = useDispatch();

    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const profile = useSelector((state) => state.user);

    const reviewClickHandler = () => {
        const newReview = {
             comment: getReview,
             _id: (new Date()).getTime(),
             product_id: active,
             user_id: profile._id,
             userFirstName: profile.firstName,
             userLastName: profile.lastName,
             rating: getRating,
             date: today.toLocaleDateString()
        }

        dispatch(createReviewThunk(newReview));
    }

     return(
        <ul className="list-group">
            <div>
               <hr/>
               <b>REVIEWS</b>
            </div>

            {
              review.map(r => <ReviewsComponent key={r._id} review={r}/>)
            }

             <div className="row ms-1 mt-4">
                <div className="row col-10">
                    {
                        profile.role === 'user' &&
                        <div className="col-10">
                        <textarea value={getReview} placeholder="Write a Review"
                                  className="form-control square-pill ps-5"
                                  onChange={(event) => setReview(event.target.value)}>
                        </textarea>
                        </div>
                    }

                </div>
                <div className="col-2">
                    {
                        profile.role === 'user' &&
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