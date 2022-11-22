import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "../../Images/P2.jpg" },
    { url: "../../Images/P1.jpg" },
    { url: "../../Images/P1-1.jpg" },
    { url: "../../Images/P2-2.jpg" },
];

const ImagesComponent = ({property}) => {
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