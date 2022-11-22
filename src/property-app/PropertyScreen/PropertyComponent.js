import React from 'react';
import p from "../../assets/Properties.json";
import AmenitiesComponent from "./Amenities/AmenitiesComponent";
import NavbarComponent from "../NavbarComponent";
import ImagesComponent from "./PropertyImagesDisplay/ImagesComponent";


const PropertyComponent = ()=> {
    return(
        <div className ="container-fluid wd-container">
            <div>
                <NavbarComponent />
            </div>
        <div className="row ms-1 mt-3 ">
                <div className="col-6">
                    <ImagesComponent property={p}/>
                </div>

            <div className="col-4">
               <AmenitiesComponent property={p}/>
            </div>
        </div>

            <div></div>

        </div>
    );
};
export default PropertyComponent;

