import './index.css'
import { useNavigate } from "react-router-dom";
import { Rating } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import DefaultImage from '../../../assets/default_image.jpeg'
import { useSelector } from 'react-redux';

function PropertyCard({ property }) {
    const { currentUser } = useSelector((state) => state.user)
    const navigate = useNavigate();
    const onPropertyClick = () => {
        navigate(`/product/${property.id}`)
    }
    return (

        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5 wd-card">
            <div onClick={onPropertyClick} className="wd-property-link">
                <div className="effect-ming tm-video-item">
                    <Carousel>
                        {
                            [property.thumbnail, ...property.images].map((image) =>
                                <img width="100%" height={200} src={image} alt="property" className="" onError={() => DefaultImage} />
                            )
                        }
                    </Carousel>
                </div>
                <div className="wd-card-info">
                    <div className="d-flex flex-column justify-content-between wd-card-title">
                        <span>{property.title}</span>
                    </div>

                    <div>
                        <Rating
                            name="simple-controlled"
                            value={property.rating}
                            readOnly
                            precision={0.5}
                            onChange={(event, newValue) => {
                                // TODO persist rating update
                                console.log("newValue", newValue)
                            }}
                        />
                    </div>
                </div>
                {
                    currentUser.role === 'Admin' &&
                    <div >
                        <span className={property.status === 'Pending' ? 'wd-pending-legend' : (property.status === 'Approved' ? 'wd-approved-legend' : 'wd-rejected-legend')}> status : {property.status}</span>
                    </div>
                }
                <div className='wd-brand'>
                    <span>{property.brand}</span>
                    {' '}    |   {' '}
                    <span>{property.category}</span>
                </div>
                <div className='wd-price-container'>
                    <div className='wd-price'>
                        ${property.price}
                    </div>
                    <div className='wd-discount'>
                        {property.discountPercentage}%
                    </div>
                </div>
            </div>

        </div>
    );

}

export default PropertyCard;