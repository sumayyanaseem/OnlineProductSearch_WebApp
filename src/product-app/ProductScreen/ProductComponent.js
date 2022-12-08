import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";
import ImagesComponent from "./ProductsImageComponent/productImageScreen";
import SuggestionsComponent from "./SuggestionsComponent/SuggestionsComponent";
import ReviewList from "./ReviewsComponent/ReviewList.js"
import './index.css'
import { findProductsThunkById } from '../../services/product-screen-thunk';
import { findReviewsThunkByProductId } from '../../services/reviews-thunks';
import { FormControl, InputLabel, MenuItem, Select, Skeleton } from '@mui/material';
import { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';

const ProductComponent = () => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();

    const { productById: product, productByIdLoading } = useSelector((state) => state.productById);

    const { reviews, reviewsLoading } = useSelector((state) => state.reviews);

    const [quantity, setQuantity] = useState()

    useEffect(() => {
        const paths = pathname.split('/')
        const productId = paths[2];
        dispatch(findProductsThunkById(productId))
        dispatch(findReviewsThunkByProductId(productId))
    }, [dispatch, pathname])

    const handleQuantityChange = (event) => {
        const value = event.target.value
        setQuantity(value)
    }

    return (

        <>
            {
                (<div className="container-fluid wd-product-details-container">

                    <div className="row ms-1 mt-3">
                        <div className="col-9">
                            {
                                (productByIdLoading || !product) ?
                                    <Skeleton animation="wave" width={"100%"} height={600} />
                                    : < ImagesComponent product={product} />
                            }

                        </div>
                        <div className="wd-product-details-card-info  col-3 d-none d-xl-block d-xxl-block">
                            {
                                (productByIdLoading || !product) ?
                                    (<Skeleton animation="wave" width={"100%"} height={600} />)
                                    : (<>
                                        <div className='wd-product-details-card-title'>
                                            {product.title}
                                        </div>
                                        <div className='wd-product-details-brand-container'>
                                            BY <span className='wd-product-details-brand-name'>{product.brand}</span>
                                        </div>
                                        <div className='wd-product-details-review-rating-container'>
                                            <div className='wd-product-details-rating-container'>
                                                {product.rating}
                                                <span><StarIcon style={{ color: "blue" }} /></span>
                                            </div>
                                            <div className='wd-product-details-review-container'>
                                                {reviews.length} Reviews
                                            </div>
                                        </div>
                                        <div className='wd-product-details-price-discount-container'>
                                            <div className='wd-product-details-price-container'>
                                                <span className='wd-product-details-currency-container'>$</span>{' '} {product.price}
                                            </div>
                                            <div className='wd-product-details-discount-container'>
                                                <div className='wd-product-details-discount-text'>
                                                    Save {product.discountPercentage} %
                                                </div>
                                                <div>
                                                    Inclusive of all taxes
                                                </div>
                                            </div>
                                        </div>
                                        <div className='wd-product-details-description'>
                                            {product.description}
                                        </div>
                                        <div className='wd-product-details-qty-and-buy-container'>
                                            <FormControl style={{ minWidth: 80, marginTop: '20px' }}>
                                                <InputLabel id="demo-simple-select-label">QTY</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={quantity}
                                                    label="QTY"
                                                    onChange={handleQuantityChange}
                                                >
                                                    {
                                                        [...Array(product.stock > 5 ? 5 : product.stock)]
                                                            .map(
                                                                (_, value) =>
                                                                    <MenuItem value={value} key={value}>
                                                                        <span className='wd-product-details-qty-value'>{value}</span></MenuItem>)
                                                    }
                                                </Select>
                                            </FormControl>
                                            <button className='wd-product-details-buy'>
                                                ORDER
                                            </button>
                                        </div>
                                        {product.seller && <div className='wd-product-details-seller-container'>
                                            <div className='wd-product-details-seller-text'>
                                                Seller :
                                            </div>
                                            <div className='wd-product-details-seller-name'>
                                                {product.seller}
                                            </div>
                                        </div>}
                                    </>)}

                        </div>
                    </div>
                    <div className="wd-product-details-product-component_suggestion-container">
                        {
                            (productByIdLoading || !product) ?
                                <Skeleton animation="wave" width={"100%"} height={600} />
                                : <SuggestionsComponent product={product} />
                        }

                    </div>

                    <>
                        {
                            reviewsLoading
                                ? <Skeleton animation="wave" width={"100%"} height={600} />
                                : <ReviewList review={reviews} />
                        }
                    </>
                </div>)
            }
        </>



    );
};
export default ProductComponent;