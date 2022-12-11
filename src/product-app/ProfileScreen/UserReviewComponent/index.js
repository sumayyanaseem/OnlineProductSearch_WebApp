import './index.css'
import {useEffect,useState} from 'react';
import { Rating } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import * as reviewService from '../../../services/reviews-service.js'


const UserReview = ({ userName }) => {
    const navigate = useNavigate()
    const handleProductNavigate = (review) => {
        navigate(`/product/${review.product.id}`)
    }
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        if (userName) {
            reviewService.findReviewsByUserName(userName).then((response) => {

                setReviews(response.data);
            })
        }

    }, [userName])


    return (
        reviews.length > 0 &&
        <div className="row wd-user-review-card">
            {
                reviews.map(review =>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-12 wd-user-review-container">
                        <div className='wd-user-review-header'>
                            <div>
                                <img className='wd-user-review-img' src={review.product.thumbnail} alt={`${review.product.id}-thumbnail`}  onClick={() => handleProductNavigate(review)}/>
                            </div>
                            <div className='wd-user-review-product-title-and-date-container'>
                                <div className='wd-user-review-product-title' onClick={() => handleProductNavigate(review)}>
                                    {review.product.title}
                                </div>
                                   <div className='wd-user-review-date'>
                                    {review.date}
                                </div>
                            </div>
                        </div>

                            <div className='wd-user-review-comment'>
                               {review.comment}
                            </div>
                            <Rating
                                    name="review-rating"
                                    value={review.rating}
                                    readOnly
                                    precision={0.5}
                                />
                    </div>
                )

            }
        </div>
    );

}

export default UserReview;