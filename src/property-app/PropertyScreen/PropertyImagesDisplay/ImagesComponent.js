import SimpleImageSlider from "react-simple-image-slider";



const ImagesComponent = ({property}) => {
    const images = [
        { string: "https://www.istockphoto.com/photos/boston"},
        { url: `${property.path2}` },
        { url: `${property.path3}` },
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