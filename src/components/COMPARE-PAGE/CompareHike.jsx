import React from "react";

const CompareHike = (props) => {
    const handleRemoveHike = () => {
        let newQueue = props.compareNow.slice();
        let index = newQueue.findIndex((x) => x === props.currentHike);
        newQueue[index] = "removed";
        newQueue.push(newQueue.splice(index, 1)[0]);
        props.setCompareNow(newQueue);
        props.setCompareQueue(newQueue);
    };

    return (
        <div className="CompareHike-wrapper">
            {props.currentHike ? (
                <div className="CompareHike">
                    <div className="CompareInfo-1 CompareInfo">
                        {props.currentHike.name}
                    </div>
                    <div className="CompareInfo-2 CompareInfo">
                        {props.currentHike.address}
                    </div>
                    <div className="CompareInfo-3 CompareInfo">
                        {props.currentHike.status}
                    </div>
                    <div className="CompareInfo-4 CompareInfo">
                        {props.currentHike.weekdayText}
                    </div>
                    <div className="CompareInfo-5 CompareInfo">
                        {props.currentHike.rating}
                    </div>
                    <div className="CompareInfo-6 CompareInfo">
                        {props.currentHike.latitude}
                    </div>
                    <div className="CompareInfo-7 CompareInfo">
                        {props.currentHike.longitude}
                    </div>
                    <div className="CompareInfo-8 CompareInfo">
                        {props.currentHike.types}
                    </div>
                    <div className="CompareIn   fo-9 CompareInfo">
                        {props.currentHike.phoneNumber}
                    </div>
                    <div className="CompareInfo-10 CompareInfo">
                        {props.currentHike.vicinity}
                    </div>
                    <div className="CompareInfo-11 CompareInfo">
                        {props.currentHike.website}
                    </div>
                    <div className="CompareInfo-12 CompareInfo"></div>

                    <div className="CompareHike-options">
                        <input
                            type="text"
                            name="replace"
                            placeholder="replaceHike"
                        />
                        <button onClick={() => handleRemoveHike()}>
                            Remove
                        </button>
                    </div>
                </div>
            ) : (
                <div className="CompareHike-options">
                    <input
                        type="text"
                        name="replace"
                        placeholder="replaceHike"
                    />
                </div>
            )}
        </div>
    );
};

export default CompareHike;
