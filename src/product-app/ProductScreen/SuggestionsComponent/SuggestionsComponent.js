import React from "react";


const SuggestionsComponent=({category}) => {
    //TODO:fetch products based on category and iterate over it and display max three items per category.
   console.log(category)
    return (
    <div className="row">
        <div className="col-lg-4">
            <img className="bd-placeholder-img rounded-circle" width="140" height="140"
                 src={category.thumbnail}>
            </img>

            <h2 className="fw-normal">{category.title}</h2>
            <p>{category.description}</p>
            <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
        </div>
        <div className="col-lg-4">
            <img className="bd-placeholder-img rounded-circle" width="140" height="140"
                 src={category.thumbnail}>
            </img>

            <h2 className="fw-normal">{category.title}</h2>
            <p>{category.description}</p>
            <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
        </div>
        <div className="col-lg-4">
            <img className="bd-placeholder-img rounded-circle" width="140" height="140"
                 src={category.thumbnail}>
            </img>

            <h2 className="fw-normal">{category.title}</h2>
            <p>{category.description}</p>
            <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
        </div>
    </div>
    );
};

export default SuggestionsComponent;