import React from 'react';
import { useState } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import mapStyles from '../../mapStyles';
require('dotenv').config();
// import { useEffect, useState } from "react";

// Always set the map height explicitly to define the size of the div element that contains the map.
const libraries = ['places'];
const mapContainerStyle = {
    width: '100%',
    height: '600px',
    // borderRadius: '20px',
    margin: '0 auto',
};
const center = {
    lat: 49.28,
    lng: -123.10,
};
const options = {
    styles: mapStyles,
};

// const onLoad = (marker) => {
//     console.log('marker: ', marker);
// };

// const handleClickMarker = (event, index) => {
//     console.log('clicked this marker', index);
// };

const Map = (props) => {

    // marker click event
    const [selectedCenter, setSelectedCenter] = useState(null);

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });
    

    if (loadError) return 'Error loading maps';
    if (!isLoaded) return 'Loading Maps';


    return (

        <div className='detailMap'>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={10}
                center={center}
                options={options}
            >
                {props.searchResults !== undefined ? (
                    props.searchResults.map((searchResult, index) => ( 
                        <Marker key={index} position={searchResult.geometry.location} onClick={() => {
                            setSelectedCenter(searchResult.geometry);
                        }} />

                    ))
                ) : null }

                {selectedCenter && (
                    <InfoWindow
                        onCloseClick={() => {
                            setSelectedCenter(null);
                        }}
                        position={{
                            lat: selectedCenter.latitude,
                            lng: selectedCenter.longitude
                        }}
                    >
                    </InfoWindow>
                )}
            </GoogleMap>
        </div>
    );
};

export default Map;
