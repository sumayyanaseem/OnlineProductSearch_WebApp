import React, {useEffect} from 'react';
import NavbarComponent from "../NavbarComponent";
import reviews from "../../assets/Reviews.json";
import {useSelector} from "react-redux";
import {useDispatch} from 'react-redux';
import {useLocation} from "react-router-dom";
import ImagesComponent from "./ProductsImageComponent/productImageScreen";
import DescriptionComponent2 from "./Description/DescriptionComponent2";
import DetailsComponent from "./Details/Details";
import SuggestionsComponent from "./SuggestionsComponent/SuggestionsComponent";

const templateProperty = {
    "host": "Space",
    "state": "1h",
    "status":"InReview",
    "city": "Boston",
    "amenities": "Wifi, Complimentary Breakfast, Pool",
    "cost": "$1000",
    "cleaning_fee": "$70 / stay",
    "service_fee": "$35 / stay",
    "short_description": "This is a remodelled home with beautiful outdoors.",
    "description": "Have fun with the family at this stylish fully remodeled cottage. Plenty of outdoor areas to hang out by a fire pit or dine outdoors.",
    "bedrooms": "3"
}

const ProductComponent = () => {
    const dispatch = useDispatch();
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    console.log(active);
    console.log("product");
    const {products, loading} = useSelector((state) => state.products);
    console.log(products);
    console.log(products[active]);
    const prod =products[active];
    console.log(loading);
    const reviewDetails = reviews.filter(r => r.property_id === active);
    const profile = useSelector((state) => state.user);

    const propertyClickHandler = () => {
        /*const newProperty = {
            ...templateProperty,
            name: name
        }
        dispatch(createPropertiesThunk(newProperty));*/
    }

    return (

        <>
            {
                loading && <h3>loading...</h3>
            }

            {
                !loading &&

                <div className="container-fluid wd-container">
                    <div>
                        <NavbarComponent/>
                    </div>
                    <div className="row ms-1 mt-3">
                        <div className="col-9">
                            <ImagesComponent product={prod}/>
                        </div>
                        <div className="wd-card-info  col-3 d-none d-xl-block d-xxl-block">
                            <DetailsComponent product={prod}/>
                            <div className="d-none d-xl-block d-xxl-block">
                                {
                                    <button type="button"
                                        className="rounded-pill btn btn-secondary float-end mt-2 fw-bold"
                                        onClick={propertyClickHandler}>
                                        Buy
                                    </button>
                                }
                            </div>
                        </div>


                    </div>
                    <div>
                        <DescriptionComponent2 product={prod}/>
                    </div>
                    <div>
                        <SuggestionsComponent category={prod}/>
                    </div>
                </div>
            }
            </>



    );
};
export default ProductComponent;