import React from "react";
import ReactStars from "react-stars";

const CompareHike = (props) => {
    const handleRemoveHike = () => {
        let newQueue = props.compareNow.slice();
        let index = newQueue.findIndex((x) => x === props.currentHike);
        newQueue[index] = null;

        newQueue.slice(0, 4);
        props.setCompareNow(newQueue);
    };

    const imageStyle = {
        width: "149px",
        height: "149px",
        objectFit: "cover",
        borderRadius: "100%",
    };

    const rating = {
        value: props.currentHike.rating,
        half: true,
        edit: false,
        count: 5,
        color2: "#FF5A1F",
        size: 20,
    };

    return (
        <div className="CompareHike-wrapper">
            {props.currentHike ? (
                <div className="CompareHike">
                    <div className="CompareInfo-1 CompareInfo">
                        <img
                            src={props.currentHike.photoRef}
                            style={imageStyle}
                            alt={props.currentHike}
                        />
                    </div>
                    <div className="CompareInfo-2 CompareInfo">
                        {props.currentHike.name}
                    </div>
                    <div className="CompareInfo-3 CompareInfo">
                        {props.currentHike.address}
                    </div>
                    <div className="CompareInfo-4 CompareInfo">
                        {props.currentHike.elevation} m
                    </div>
                    <div className="CompareInfo-5 CompareInfo">
                        <ReactStars {...rating} />
                    </div>
                    <div className="CompareInfo-6 CompareInfo">
                        {props.currentHike.difficulty}
                    </div>
                    <div className="CompareInfo-7 CompareInfo">
                        {props.currentHike.status ? "Open" : "Closed"}
                    </div>
                    <div className="CompareInfo-8 CompareInfo">
                        {props.currentHike.weekdayText}
                    </div>

                    <div className="CompareHike-options">
                        <button
                            onClick={() => handleRemoveHike()}
                            className="remove-comparison"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default CompareHike;
