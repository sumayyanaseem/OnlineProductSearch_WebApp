import React from "react";

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
                </div>
                <div className="col-md-5">
                    <svg
                        className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                        width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img"
                        aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice"
                        focusable="false"><title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#eee"/>
                        <text x="50%" y="50%" fill="#aaa" dy=".3em">
                            product.price
                        </text>
                    </svg>

                </div>
            </div>

            <span className="featurette-divider"></span>

            <div className="row featurette">
                <div className="col-md-7 order-md-2">
                    <h2 className="featurette-heading fw-normal lh-1">Oh yeah, it’s that
                        good. <span
                            className="text-muted">See for yourself.</span></h2>
                    <p className="lead">product.description</p>
                </div>
                <div className="col-md-5 order-md-1">
                    <svg
                        className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                        width="500" height="500" xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-label="Placeholder: 500x500"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"><title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#eee"/>
                        <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
                    </svg>

                </div>
            </div>
        </div>
    );

};

export default  DescriptionComponent2;

