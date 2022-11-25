import './index.css'
import { Link } from 'react-router-dom';

function PropertyCard({property}) {

    console.log(property)

    return (
        
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5 wd-card">
                <Link to={`/property/${property._id}`} className="wd-property-link">
                    <div className="effect-ming tm-video-item">
                        <img width="100%" height={200} src={`/assets/${property.image}`} alt="property" />
                    </div>
                    <div className="wd-card-info">
                    <div className="d-flex flex-column justify-content-between">
                        <span>{property.name}</span>
                        <span>{property.city}</span>
                        <span>{property.cost} / night</span>    
                    </div>
                    <div>
                        <span>{property.rating} star</span>
                    </div>
                    </div>
                    </Link>
            </div>
    );

}

export default PropertyCard;