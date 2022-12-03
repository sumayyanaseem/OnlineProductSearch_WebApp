import React, {useEffect} from 'react';
import NavbarComponent from "../NavbarComponent";
import products from "./Products.json";
import reviews from "../../assets/Reviews.json";
import {useSelector} from "react-redux";
import {useDispatch} from 'react-redux';
import {useLocation} from "react-router-dom";
import {findPropertiesThunkById} from "../../services/property-screen-thunk";
import ProductImagesCarousel from "./ProductsImageComponent/ProductImagesCarousel";
import ImagesComponent from "./productImageScreen";
import DescriptionComponent2 from "./Description/DescriptionComponent2";
import DetailsComponent from "./Details/Details";

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

const ProductComponent = ({product}) => {
    const dispatch = useDispatch();
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    console.log(active);
    console.log("product");
    //const {products, loading} = useSelector((state) => state.products);
    console.log(products.products[0]);
    const propertyDetails =products.products.filter(p => p.id === active);
    console.log(propertyDetails);
    const reviewDetails = reviews.filter(r => r.property_id === active);
    const profile = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(findPropertiesThunkById(active))
    }, [])

    const propertyClickHandler = () => {
        /*const newProperty = {
            ...templateProperty,
            name: name
        }
        dispatch(createPropertiesThunk(newProperty));*/
    }

    return (
                <div className="container-fluid wd-container">
                    <div>
                        <NavbarComponent/>
                    </div>
                    <div className="row ms-1 mt-3">
                        <div  className="col-9">
                        <ImagesComponent property={propertyDetails}/>
                        </div>
                        <div  className="col-3">
                            <DetailsComponent property={propertyDetails}/>
                        </div>
                    </div>
                    <div>
                        <DescriptionComponent2 property={propertyDetails}/>
                    </div>
                </div>


    );
};
export default ProductComponent;