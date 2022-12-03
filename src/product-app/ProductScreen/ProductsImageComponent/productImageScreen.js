import Carousel from "react-material-ui-carousel";



const ImagesComponent = ({product}) => {
    return (
        <div>

            <Carousel>
                {
                    [product.thumbnail, ...product.images].map((image) =>
                                                                     <img width="100%" height={600} src={image} alt="property" className="" onError={`this.src = ../../../assets/default_image.jpeg`} />
                    )
                }
            </Carousel>
        </div>
    );
};

export default ImagesComponent;