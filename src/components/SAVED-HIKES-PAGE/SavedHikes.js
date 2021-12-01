import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SavedHikeCard from './saved hikes cards/SavedHikeCard';

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

            <div className='savedHikesCards'>
                {savedHikes &&
                    savedHikes.map((item, index) => (
                        <SavedHikeCard
                            imageRef={item.photoRef[0]}
                            title={item.name}
                            rating={item.rating}
                        />
                    ))}
            </div>
        </div>
    );
}
