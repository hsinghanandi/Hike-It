import React from "react";
import { Link } from "react-router-dom";

const CompareButton = (props) => {
    const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

    const handleAddCompare = () => {
        let newQueue = [];

        let newPlace = props.place;
        newPlace.photoRef = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${props.place.photoRef[0]}&key=${googleMapsApiKey}`;

        newQueue.push(newPlace);

        props.setCompareQueue(newQueue);
    };

    return (
        <div className="compareHikeBtn">
            <Link
                onClick={() => handleAddCompare()}
                to={"./ComparePage"}
                className="compareButton"
            >
                Add to Hike Compare!
            </Link>
        </div>
    );
};

export default CompareButton;
