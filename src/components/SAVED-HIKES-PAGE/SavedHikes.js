import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
// import SavedHikeCard from './saved hikes cards/SavedHikeCard';

const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

export default function SavedHikesPage(props) {
    const [savedHikes, setSavedHikes] = useState([]);

    const getSavedHikes = () => {
        axios
            .get(`${props.SERVER_LOCATION}/hikeit/api/v1/save-hike`)
            .then((results) => {
                console.log('User saved hikes are:', results.data.data);
                setSavedHikes(results.data.data);
            })
            .catch((err) => {
                console.log('ERROR while getting saved Hikes!');
            });
    };

    useEffect(() => getSavedHikes(), []);

    return (
        <div className='savedHikesPage'>
            <div className='savedHikesHeading'>
                <h1>Your Saved Hikes</h1>
            </div>

            <div className='savedHikesCards blogCards'>
                {savedHikes &&
                    savedHikes.map((item, index) => (
                        <div className="savedHikesCardsChild" key={index}>
                            {/* <SavedHikeCard
                                imageRef={item.photoRef[0]}
                                title={item.name}
                                rating={item.rating}
                            /> */}

                            <img
                                id='savedHikeImage'
                                        src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${item.photoRef[0]}&key=${googleMapsApiKey}`}
                                        alt={item.name}
                            />
                            <h3 className='blogTitle'>{item.name}</h3>
                            <div className='blogContent'>
                                <h3>
                                    <Link
                                        onClick={() => {
                                            props.setPlaceID(item.placeID);
                                        }}
                                        to={"./DetailsPage"}
                                    >
                                        {item.name}
                                    </Link>
                                </h3>
                                <p>Rating: {item.rating}</p>
                            </div>
                        </div>

                    ))}
            </div>
        </div>
    );
}
