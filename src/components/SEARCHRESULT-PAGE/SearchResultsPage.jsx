import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ResultCard from "./ResultCard.jsx";
import SearchMap from "./SearchMap.jsx";

const SearchResultsPage = (props) => {
    const [checkboxQueue, setCheckboxQueue] = useState([]);

    useEffect(() => {
        props.setSearchSubmitted(false);
    }, []);

    const handlePhoto = (source) => {
        if (source !== undefined) {
            return source[0].photo_reference;
        } else {
            return "Aap_uEBXkv44f3QYV_Fyncko8keODGAuysXL9KMMsEg44LEdyOylGH3NmK4jBHerSnY2mby0ZceEp3JH5I9QW6W5oxK4DAjUeoAxIABEUDNrn18uzceCC-VrXyvsQpQeuDi_KD8NSXqEvrZAfjtGWocLT05awgAnAFuWvUJFMRpmNfIAlyRg";
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
                <div className="resultMap">
                    <SearchMap searchResults={props.searchResults} />
                </div>               
            </div>
        </div>
    );
};

export default SearchResultsPage;
