import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import mapStyles from '../../mapStyles';

const SearchMap = props => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ['places']
    });
    
    if (loadError) return 'Error loading maps';
    if (!isLoaded) return 'Loading Maps';
    
    return (
        <GoogleMap
        mapContainerStyle={{
            height: '100%',
            width: '100%'
        }}
        zoom={12}
        center={props.center}
        options={{ styles: mapStyles }}
        >
        {props.markers.map(marker => (
            <Marker
            key={marker.id}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => props.handleMarkerClick(marker)}
            />
        ))}
        </GoogleMap>
    );
}

export default SearchMap;