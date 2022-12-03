import React, {useState} from "react";
import {useDispatch} from "react-redux";
import ReviewsComponent from "./ReviewsComponent.js";
import {createReview} from "./reviews-reducer";

const ReviewList = ({review}) => {
    let [getReview, setReview] = useState('');
    const dispatch = useDispatch();
    const reviewClickHandler = () => {
        const newReview = {
        review: getReview
        }
        dispatch(createReview(newReview));
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
                <div className="col-10">
                   <textarea value={getReview} placeholder="Write a Review" className="form-control square-pill ps-5"
                   onChange={(event) => setReview(event.target.value)}>
                   </textarea>
                </div>
                <div className="col-2">
                   <button className="rounded-pill btn btn-primary float-end mt-2 pe-3 fw-bold"
                       onClick={reviewClickHandler}>
                       Submit
                   </button>
                </div>
            </div>
        </ul>
     );
 };
export default ReviewList;