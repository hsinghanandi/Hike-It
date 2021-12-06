import React from "react";
<<<<<<< Updated upstream
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
=======
import { useEffect } from "react";

>>>>>>> Stashed changes
import ResultCard from "./ResultCard.jsx";

const SearchResultsPage = (props) => {
    const [checkboxQueue, setCheckboxQueue] = useState([]);

    useEffect(() => {
        props.setSearchSubmitted(false);
    }, []);

    const handlePhoto = (source) => {
        if (source !== undefined) {
            return source[0].photo_reference;
        } else {
            console.log("not defined", source);
            return "-img";
        }
    };

    const handleSetComparison = () => {
        props.setCompareQueue(checkboxQueue);
    };

    return (
        <div>
            <h1 className="resultSection-title">Search Results</h1>

            <div className="resultSection">
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
                            checkboxQueue={checkboxQueue}
                            setCheckboxQueue={setCheckboxQueue}
                        />
                    ))
                ) : (
                    <div>No results</div>
                )}
                <Link
                    onClick={() => handleSetComparison()}
                    to={"./ComparePage"}
                    className="compareButton"
                >
                    Compare Hikes
                </Link>
                <div className="resultMap"></div>
            </div>
        </div>
    );
};

export default SearchResultsPage;
