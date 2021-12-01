import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import mapStyles from "../../../mapStyles";
require("dotenv").config();
// import { useEffect, useState } from "react";

// Always set the map height explicitly to define the size of the div element that contains the map.
const libraries = ["places"];
const mapContainerStyle = {
    width: "80%",
    height: "400px",
    borderRadius: "20px",
    margin: "0 auto",
};
const center = {
    lat: 49.28273,
    lng: -123.120735,
};
const options = {
    styles: mapStyles,
};

// Marker component
// const position = {
//     lat: 49.282730,
//     lng: -123.120735
// };


const onLoad = (marker) => {
    console.log("marker: ", marker);
};

const Map = (props) => {

    // Marker component
    const position = {
        lat: props.latitude,
        lng: props.longitude
    };

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";

    return (
        <div classNmae="detailMap">
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={10}
                center={center}
                options={options}
            >
                <Marker position={position} onLoad={onLoad} />
            </GoogleMap>
        </div>
    );
};

export default Map;
