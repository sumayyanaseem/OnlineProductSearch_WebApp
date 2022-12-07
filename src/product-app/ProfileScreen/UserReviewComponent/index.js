import './index.css'
import * as React from 'react';
import { Rating } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const UserReview = (props) => {

    const review = props.r;

    console.log("HERE HERE", review)
    const navigate = useNavigate()

    const handleProductNavigate = () => {
        navigate(`/product/${review.product.id}`)
    }


    return (
        <div className="wd-user-review-container" onClick={handleProductNavigate}>
            <div className="wd-user-review-left-pane">
                <div>
                    <img className='wd-user-reivew-img' src={review.product.thumbnail} />
                </div>
                <div className='wd-user-review-product-title'>
                    {
                        review.product.title
                    }
                </div>
            </div>

            <div className="wd-user-review-right-pane">
                <div>
                    <span>Rating :</span>  <Rating
                        name="simple-controlled"
                        value={review.rating}
                        readOnly
                        precision={0.5}
                        onChange={(event, newValue) => {
                            // TODO persist rating update
                            console.log("newValue", newValue)
                        }}
                    />
                </div>
                <div>
                    Comment : {review.comment}
                </div>
                <div>
                    {
                        review.date
                    }
                </div>
            </div>
        </div>

    );

}

export default UserReview;