import React from "react";
import "./index.css";
const DescriptionComponent2 = ({product}) => {
    return (
        <div className="container marketing">
            <span className="featurette-divider"></span>
            <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading fw-normal lh-1">First featurette
                        heading. <span
                            className="text-muted">It’ll blow your mind.</span></h2>
                    <p className="lead">Some great placeholder content for the first featurette
                        here.
                        Imagine some exciting prose here.</p>
                    <h2 className="featurette-heading fw-normal lh-1">Oh yeah, it’s that
                        good. <span
                            className="text-muted">See for yourself.</span></h2>
                    <p className="lead">{product.description}</p>
                </div>
                <div className="col-md-5">
                    <svg
                        className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                        width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img"
                        aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice"
                        focusable="false"><title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#eee"/>
                        <text className="animation-keyframes-1" x="50%" y="50%" fill="#aaa" dy=".3em">
                            Price ${product.price} Only
                        </text>
                    </svg>

                </div>
            </div>
        </div>
    );

};

export default  DescriptionComponent2;

