import React from "react";

const CompareHike = (props) => {
    const handleRemoveHike = () => {
        let newQueue = props.compareNow.slice();
        let index = newQueue.findIndex((x) => x === props.currentHike);
        newQueue[index] = null;

        newQueue.slice(0, 4);
        props.setCompareNow(newQueue);
    };

    const imageStyle = {
        width: "100px",
        height: "100px",
        objectFit: "cover",
    };

    return (
        <div className="CompareHike-wrapper">
            {props.currentHike ? (
                <div className="CompareHike">
                    <div className="CompareInfo-1 CompareInfo">
                        <img
                            src={props.currentHike.photoRef}
                            style={imageStyle}
                        />
                    </div>
                    <div className="CompareInfo-2 CompareInfo">
                        {props.currentHike.name}
                    </div>
                    <div className="CompareInfo-3 CompareInfo">
                        {props.currentHike.address}
                    </div>
                    <div className="CompareInfo-4 CompareInfo">
                        {props.currentHike.elevation}
                    </div>
                    <div className="CompareInfo-5 CompareInfo">
                        {props.currentHike.rating}
                    </div>
                    <div className="CompareInfo-6 CompareInfo">Difficulty</div>
                    <div className="CompareInfo-7 CompareInfo">
                        {props.currentHike.status ? "open" : "closed"}
                    </div>
                    <div className="CompareInfo-8 CompareInfo">
                        {props.currentHike.weekdayText}
                    </div>

                    <div className="CompareHike-options">
                        <button onClick={() => handleRemoveHike()} className="remove-comparison">
                            Remove
                        </button>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default CompareHike;
