import React from "react";

import properties from './Properties.json';
import PropertyItem from "./PropertyComponent";

const PropertyList = () => {
    return (
        <ul className="list-group">
            {
                properties.map(property => <PropertyItem key={property.id} property={property}/>)
            }
        </ul>
    );
};

export default PropertyList;