import React from "react";
import { useNavigate } from "react-router-dom";
import './index.css'

const SuggestionsItemComponent = ({ item }) => {
    const navigate = useNavigate();
    const onViewClick = () => {
        navigate(`/product/${item.id}`)
    }
    return (
        <div className="wd-suggestion-item-container" onClick={onViewClick}>
            <img className="bd-placeholder-img" width="100%" height="200"
                src={item.thumbnail} alt={`${item.title}-thumbnail`}>
            </img>
            <div className="wd-suggestion-item-title">
                {item.title}
            </div>
            <div className="wd-suggestion-item-description">
                {item.description}
            </div>
            <div className="wd-suggestion-item-price-container">
                <div className="wd-suggestion-item-price">
                    $ {' '} {item.price}
                </div>
                <div className="wd-suggestion-item-discount">
                    {'('} {item.discountPercentage}{'% OFF)'}
                </div>
            </div>
        </div>
    );



};

export default SuggestionsItemComponent;