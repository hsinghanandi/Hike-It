import React from 'react';
import { Link } from 'react-router-dom';

const ResultCard = (props) => {
    const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

    return (
        <div className='resultCardContent'>
            <div className='resultCardImg'>

                {props.photoRef ? (
                    <img
                        src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${props.photoRef}&key=${googleMapsApiKey}`}
                        alt={`${props.placeTitle}`}
                    />
                ) : (
                    <p>images</p>
                )}
            </div>

            <div className='resultCardText'>

                <h2>
                    <Link
                        onClick={() => {
                            props.setPlaceID(props.placeID);
                        }}
                        to={'./DetailsPage'}

                    >
                        {props.name}
                    </Link>
                </h2>

                <h3>{props.vicinity}</h3>
                <h4>Rating: {props.rating}</h4>
            </div>
            <input className='resultCardCheckbox' type='checkbox' />

        </div>
    );
};

export default ResultCard;
