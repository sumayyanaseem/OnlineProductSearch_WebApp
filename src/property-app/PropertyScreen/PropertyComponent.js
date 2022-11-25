import React from 'react';
import AmenitiesComponent from "./Amenities/AmenitiesComponent";
import NavbarComponent from "../NavbarComponent";
import ImagesComponent from "./PropertyImagesDisplay/ImagesComponent";
import {useLocation} from "react-router-dom";
import properties from "../../assets/Properties.json";
import reviews from "../../assets/Reviews.json";
import ReviewList from "./ReviewsComponent/ReviewList.js"


const PropertyComponent = ({property})=> {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    console.log(active);
    const propertyDetails=properties.filter(p => p._id === active);
    const reviewDetails = reviews.filter(r => r.property_id === active);
    return(
        <div className ="container-fluid wd-container">
            <div>
                <NavbarComponent />
            </div>
        <div className="row ms-1 mt-3 ">
                <div className="col-6">
                    <ImagesComponent property={propertyDetails[0]}/>
                </div>
            <div className="col-4">
                <AmenitiesComponent property={propertyDetails[0]}/>
            </div>

        </div>

            <div>
               <ReviewList review={reviewDetails}/>
            </div>

        </div>
    );
};
export default PropertyComponent;

