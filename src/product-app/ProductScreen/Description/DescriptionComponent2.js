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
                Price ${product.price} Only

                </div>
            </div>
        </div>
    );

};

export default  DescriptionComponent2;

