import React from "react";
import { Link } from "react-router-dom";

const PopularHikeCard = (props) => {
    return (
        <div className="HomeHikeCard">
            <img
                className="HomePopularImage"
                src={props.HomePopularImage}
                alt="Trail Near You"
            />
            <div className="HomePopularHikeName">
                <h2>
                <Link
                        onClick={() => {
                            props.setPlaceID(props.placeID);
                        }}
                        to={"./DetailsPage"}
                    >
                        {props.HomePopularTitle}
                </Link>
                 </h2>
                <h3>{props.HomePopularLocation}</h3>
            </div>
        </div>
    );
};

export default PopularHikeCard;
