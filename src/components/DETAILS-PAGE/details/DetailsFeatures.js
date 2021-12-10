import ReactStars from "react-stars";
import React from "react";

const DetailsFeatures = (props) => {
    let ratingValue = props.place.rating;

    const rating = {
        value: props.place.rating,
        half: true,
        edit: false,
        count: 5,
        color2: "#FF5A1F",
    };

    return (
        <div className="detailsFeatures">
            <div className="detailsHeading">Features</div>
            <div className="detailsContent">
                <div className="detailsDesc">
                    <p>
                        {`HikeIt is a data-driven web platform that helps hiking
                        enthusiasts and outdoor adventurers plan their hikes by
                        providing them with the tools to discover, search and
                        compare different hiking trails.`}
                    </p>
                </div>
                <ul>
                    <li>Currently: {props.place.status ? "open" : "closed"}</li>
                    <li>Schedule: {props.place.weekdayText}</li>
                    <li>
                        Rating:
                        <ReactStars {...rating} />
                    </li>
                    <li>Elevation: {props.place.elevation} m</li>
                    <li>Address: {props.place.address}</li>
                    <li>Difficulty: {props.place.difficulty}</li>
                    {props.place.phoneNumber ? (
                        <li>Phone:${props.place.phoneNumber}</li>
                    ) : null}
                </ul>
            </div>
        </div>
    );
};

export default DetailsFeatures;
