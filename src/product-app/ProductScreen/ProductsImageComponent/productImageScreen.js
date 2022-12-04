import Carousel from "react-material-ui-carousel";
import DefaultImage from '../../../assets/default_image.jpeg'


const ImagesComponent = ({ product }) => {
    return (
        <div>

            <Carousel>
                {
                    [product.thumbnail, ...product.images].map((image) =>
                        <img width="100%" height={600} src={image} alt="property" className="" onError={() => DefaultImage} />
                    )
                }
            </Carousel>
        </div>
    );
};

export default ImagesComponent;