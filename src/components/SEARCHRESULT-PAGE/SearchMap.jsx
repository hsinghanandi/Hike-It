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
    height: '700px',
    // borderRadius: '20px',
    margin: '0 auto',
};
const center = {
    lat: 49.24,
    lng: -122.98,
};
const options = {
    styles: mapStyles,
};

const onLoad = infoWindow => {
    console.log('infoWindow: ', infoWindow)
}

// const handleClickMarker = (event, index) => {
//     console.log('clicked this marker', index);
// };

const Map = (props) => {

    // marker click event
    const [selectedMarker, setSelectedMarker] = useState([]);

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
                zoom={11}
                center={center}
                options={options}
            >
                {props.searchResults !== undefined ? (
                    props.searchResults.map((searchResult, index) => ( 
                        <Marker key={index} position={searchResult.geometry.location} onClick={() => {
                            setSelectedMarker(searchResult)
                            console.log('selectedMarker', selectedMarker);
                        }} />

                    ))
                ) : null }

                {selectedMarker !== undefined && selectedMarker.geometry !== undefined ? (
                    <InfoWindow
                        position={selectedMarker.geometry.location}
                        onCloseClick={() => {
                            setSelectedMarker([]);
                        }}
                    >
                        <div>
                            <h1>{selectedMarker.name}</h1>
                            <p>Rating: {selectedMarker.rating}</p>
                        </div>
                    </InfoWindow>
                ) : null}
            </GoogleMap>
        </div>
    );
};

export default Map;
