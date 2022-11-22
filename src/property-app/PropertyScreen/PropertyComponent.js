import React from 'react';
import p from "./Properties.json";
import "./index.css";
import AmenitiesComponent from "./Amenities/AmenitiesComponent";

const PropertyComponent = ()=> {

    return(
        <div className ="row">
        <div className="row ms-1 mt-3 ">
                <div className="col-6">
                    <div className="card" id={p.id}>
                        <div id="carouselExampleSlides" className="carousel slide"
                             data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="card-img-top d-block " src={`${p.path}`}
                                         alt="First slide"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block " src={`${p.path2}`}
                                         alt="Second slide"/>
                                </div>
                                <button className="carousel-control-prev" type="button"
                                        data-bs-target="#carouselExampleSlides"
                                        data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon"
                                          aria-hidden="true"></span>
                                    <span className="visually-hidden"></span>
                                </button>
                                <button className="carousel-control-next" type="button"
                                        data-bs-target="#carouselExampleSlides"
                                        data-bs-slide="next">
                                    <span className="carousel-control-next-icon"
                                          aria-hidden="true"></span>
                                    <span className="visually-hidden"></span>
                                </button>
                            </div>
                        </div>
                </div>
                </div>

            <div className="col-4">
               <AmenitiesComponent property={p}/>
            </div>
        </div>

        </div>
    );
};
export default PropertyComponent;

