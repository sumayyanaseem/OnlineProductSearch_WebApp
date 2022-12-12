import './index.css'
import { useNavigate } from "react-router-dom";
import { Rating } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { useSelector } from 'react-redux';

const ProductCard = ({ product }) => {
    const { currentUser } = useSelector((state) => state.user)
    const navigate = useNavigate();
    const onPropertyClick = () => {
        navigate(`/product/${product.id}`)
    }
    return (

        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5 wd-card">
            <div onClick={onPropertyClick} className="wd-property-link">
                <div className="effect-ming tm-video-item"
                >
                    <Carousel>
                        {
                            [product.thumbnail, ...product.images].map((image, index) =>
                                <img width="100%" height={200} src={image} alt="property" className="" key={`${product.id}-img-${index}`} />
                            )
                        }
                    </Carousel>
                </div>
                <div className="wd-card-info">
                    <div className="d-flex flex-column justify-content-between wd-card-title">
                        <span>{product.title}</span>
                    </div>

                    <div>
                        <Rating
                            name="simple-controlled"
                            value={product.rating}
                            readOnly
                            precision={0.5}
                        />
                    </div>
                </div>
                {
                    (currentUser?.role === 'Admin' || (currentUser?.role === 'Seller' && currentUser?.userName===product.sellerUsername)) &&
                    <div >
                        <span className={product.status === 'Pending' ? 'wd-pending-legend' : (product.status === 'Approved' ? 'wd-approved-legend' : 'wd-rejected-legend')}> status : {product.status}</span>
                    </div>
                }
                <div className='wd-brand'>
                    <span>{product.brand}</span>
                    {' '}    |   {' '}
                    <span>{product.categories.join(' | ')}</span>
                </div>
                <div className='wd-price-container'>
                    <div className='wd-price'>
                        ${product.price}
                    </div>
                    <div className='wd-discount'>
                        {product.discountPercentage}%
                    </div>
                </div>
            </div>

        </div>
    );

}

export default ProductCard;