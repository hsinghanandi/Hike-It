import React from 'react';
import { useEffect } from 'react';

import ResultCard from './ResultCard.jsx';

const SearchResultsPage = (props) => {
    useEffect(() => {
        props.setSearchSubmitted(false);
    }, []);

    const handlePhoto = (source) => {
        if (source !== undefined) {
            return source[0].photo_reference;
        } else {
            console.log('not defined', source);
            return '-img';
        }
    };

    return (
        <div>
            <h1>Search Results</h1>
            <div className='resultSection'>
                {props.searchResults !== undefined ? (
                    props.searchResults.map((searchResult, index) => (
                        <ResultCard
                            setPlaceID={props.setPlaceID}
                            placeID={searchResult.place_id}
                            key={index}
                            name={searchResult.name}
                            vicinity={searchResult.vicinity}
                            photoRef={handlePhoto(searchResult.photos)}
                            rating={searchResult.rating}
                            googleMapsApiKey={props.googleMapsApiKey}
                        />
                    ))
                ) : (
                    <div>No results</div>
                )}
            </div>
        </div>
    );
};

export default SearchResultsPage;
