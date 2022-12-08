import ReactImageGallery from "react-image-gallery";
import './index.css'


const ImagesComponent = ({ product }) => {

    const productImages = (product ? [product.thumbnail, ...(product?.images ?? [])] : []).map((image) => ({ original: image, thumbnail: image }))
    return (
        <ReactImageGallery
            items={productImages}
            showThumbnails={true}
            showFullscreenButton={false}
            showPlayButton={false}
            autoPlay={false}
            showNav={false}
        />
    );
};

export default ImagesComponent;