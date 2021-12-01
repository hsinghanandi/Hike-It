import React from "react";

const PopularHikeCard = (props) => {
    return (
        <div className="HomeHikeCard">
            <img
                className="HomePopularImage"
                src={props.HomePopularImage}
                alt="Trail Near You"
            />
            <div className="HomePopularHikeName">
                <h2>{props.HomePopularTitle}</h2>
                <h3>{props.HomePopularLocation}</h3>
            </div>
        </div>
    );
};

export default PopularHikeCard;
