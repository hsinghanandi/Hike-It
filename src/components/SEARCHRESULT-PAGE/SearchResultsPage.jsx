import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ResultCard from "./ResultCard.jsx";
import SearchMap from "./SearchMap.jsx";



const SearchResultsPage = (props) => {
    const [checkboxQueue, setCheckboxQueue] = useState([]);
    const {searchSubmitted, setSearchSubmitted} = props
    useEffect(() => {
        setSearchSubmitted(false);
    }, [searchSubmitted]);

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
        <div className="searchResultsPage">

            <h1 className="searchResultsHeading">Search Results</h1>

            <h2 className="checkBoxesNotice">Check the boxes for Hike Comparison</h2>

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
                    
                </div>
                <div className="resultMap">
                    <SearchMap searchResults={props.searchResults} />
                </div> 
                <div className="filters">
       
                <Link
                    onClick={() => handleSetComparison()}
                    to={"./ComparePage"}
                    className="compareButton"
                >
                    Compare Hikes
                </Link>
            </div>              
            </div>
        </div>
    );
};

export default SearchResultsPage;
