import React from "react";

const FeatureCard = (props) => {
    return (
        <div className="HomeFeatureCard">
            <img
                className="HomeFeatureImage"
                src={props.HomeFeatureImage}
                alt="Trail Near You"
            />
            <div className="HomeFeatureInfo">
                <h2>{props.HomeFeatureTitle}</h2>
                <p>{props.HomeFeatureDescription}</p>
            </div>
        </div>
    );
};

export default FeatureCard;
