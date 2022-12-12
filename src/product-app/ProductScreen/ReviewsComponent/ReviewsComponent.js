import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteReviewThunk, updateReviewThunk } from "../../../services/reviews-thunks";
import StarIcon from '@mui/icons-material/Star';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";

const Review = ({ review }) => {
    const { currentUser } = useSelector((state) => state.user);
    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useDispatch();
    const deleteReviewHandler = (id) => {
        dispatch(deleteReviewThunk(id));
    }
    const navigate = useNavigate()

    const onReviewUserNameClickHandler = () => {
        navigate(`/account/${review.userName}`)
    }
    const handleReviewEdit = () => {
        setIsEdit(true);
    }
    const [updatedReviewComment, setUpdatedReviewComment] = useState(review.comment)

    const handleUpdateSave = () => {
        const updatedReview = {
            ...review,
            comment: updatedReviewComment
        }
        dispatch(updateReviewThunk(updatedReview));
        setIsEdit(false)
    }
    return (
        <div className="wd-review-container">
            <div className="wd-review-rating-container">
                {review.rating}
                <span><StarIcon style={{ color: "blue" }} /></span>
            </div>

            <div className="wd-review-comment-user-container">
                {
                    review.userName === currentUser?.userName &&
                    (<div className="wd-user-review-action-icons">
                        <i className="fa fa-x float-end wd-lightgrey"
                            onClick={() => deleteReviewHandler(review.id)}></i>
                        <EditIcon className="float-end wd-lightgrey mr-2" onClick={
                            () => {
                                handleReviewEdit(review)
                            }
                        } />
                    </div>
                    )
                }
                <div className="wd-review-comment-container">
                    {!isEdit
                        ? <div>{review.comment}</div>
                        : <TextField
                            id="outlined-textarea"
                            label="Write a review"
                            placeholder="What do you like or dislike about this product?"
                            multiline
                            fullWidth
                            value={updatedReviewComment}
                            style={{ color: "blue" }}
                            onChange={(event) => setUpdatedReviewComment(event.target.value)}
                            onKeyPress={(ev) => {
                                console.log(`Pressed keyCode ${ev.key}`);
                                if (ev.key === 'Enter') {
                                    // Do code here
                                    ev.preventDefault();
                                    handleUpdateSave()
                                }
                            }}
                        />}
                </div>


                <div className="wd-review-bottom-container">
                    <div className="wd-user-container">
                        <button
                            className="wd-user-container-btn"
                            onClick={onReviewUserNameClickHandler}>
                            {review.userFirstName}
                            {' '}
                            {review.userLastName}
                        </button>
                        <div>{review.date}</div>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Review;