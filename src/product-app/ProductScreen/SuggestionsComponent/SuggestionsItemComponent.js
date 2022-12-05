import React from "react";
import {findProductsThunkById} from "../../../services/product-screen-thunk";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const SuggestionsItemComponent = (item) =>{
    console.log("SuggestionsItemComponent >> "+item.item)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onViewClick = () => {

        dispatch(findProductsThunkById(item.item.id))

        navigate(`/product/${item.item.id}`)
    }
    return (



            <div className="col-lg-4">
                <img className="bd-placeholder-img rounded-circle" width="140" height="140"
                     src={item.item.thumbnail}>
                </img>

                <h2 className="fw-normal">{item.item.title}</h2>
                <p>{item.item.description}</p>
                <p><a className="btn btn-secondary" onClick={onViewClick}>View details</a></p>
            </div>
    );



};

export default SuggestionsItemComponent;