import SimpleImageSlider from "react-simple-image-slider";



const ImagesComponent = ({property}) => {
    const images = [
        ${property.path2},
        `${property.path2}`,
        `${property.path3}`,
    ];
    console.log(property);
    console.log(images);
    return (
        <div>
            <SimpleImageSlider
                width={600}
                height={504}
                images={images}
                showBullets={true}
                showNavs={true}
            />
        </div>
    );
};

export default ImagesComponent;