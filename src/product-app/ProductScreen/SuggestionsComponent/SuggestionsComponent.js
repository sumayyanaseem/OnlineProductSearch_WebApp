import React, {useEffect} from "react";
import {findProductsByCategory} from "../../../services/product-screen-thunk";
import {useDispatch, useSelector} from "react-redux";
import SuggestionsItemComponent from "./SuggestionsItemComponent";
import {useNavigate} from "react-router-dom";


const SuggestionsComponent=({product}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const category = product.category;
    console.log("Inside SuggestionsComponent")
    console.log(category);
    console.log(product.id)
   // const { properties, loading } = useSelector((state) => state.properties);
   // console.log(properties)
   // console.log(loading)
    //const subArray = properties.filter(prop => (prop.id!== product.id && prop.category === category))
   // console.log("subarray "+subArray[0].id);
    const {productsByCategory, productsByCategoryLoading} = useSelector((state) => state.productsByCategory);
    useEffect(()  => {
        dispatch(findProductsByCategory(category))
    }, [])
    console.log("productsByCategory >> "+productsByCategory)
    console.log("productsByCategoryLoading >> "+productsByCategoryLoading)
    return (
        <>
            {
                productsByCategoryLoading && <h3>loading...</h3>
            }

            {

                !productsByCategoryLoading &&

                <div className="row">
                    {productsByCategory.map(prod =>
                                   <SuggestionsItemComponent
                                       key={prod.id} item={prod}/>)
                    }
                </div>
            }
            </>
    );
};

export default SuggestionsComponent;