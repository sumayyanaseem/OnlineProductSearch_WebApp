import React from "react";

const Review = ({ review }) => {
    console.log(review);
    return (
        <div className="row ms-1 mt-2">
            <div className="row mt-4">
                <div className="col-1">
                    <img src={review.image} className="rounded-circle" height={50} width={50} />
                </div>
                <div className="col">
                    <p><span className="fw-bolder"><b>{review.username}</b></span><br />
                        <span className="text-secondary wd-lightgrey">{review.time}</span></p>
                </div>
            </div>
            <div className="me-3"><b>Rating: </b>{review.rating}</div>
            <div className="mb-3 me-3">{review.review}</div>
        </div >
    );
}
export default Review;