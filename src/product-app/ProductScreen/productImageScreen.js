import SimpleImageSlider from "react-simple-image-slider";



const ImagesComponent = ({property}) => {
    const images = [
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg"

    ];
    // console.log(property);
    console.log(images);
    return (
        <div>
            <SimpleImageSlider
                width="900px"
                height="500px"
                images={images}
                showBullets={true}
                showNavs={true}
            />
        </div>
    );
};

export default ImagesComponent;