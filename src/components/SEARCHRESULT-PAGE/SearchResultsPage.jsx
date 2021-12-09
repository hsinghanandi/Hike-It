import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
            <h1>Search Results</h1>
            <div className="filters">
                {/* <p>SortBy</p>
                <p>FilterBy</p> */}
                <Link
                    onClick={() => handleSetComparison()}
                    to={"./ComparePage"}
                    className="compareButton"
                >
                    Compare Hikes
                </Link>
            </div>

            <div className="resultSection">
                <div className="searchResults">
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
        </div>
    );
};

export default SearchResultsPage;
