import React from "react";
import { Link } from "react-router-dom";

const CompareButton = (props) => {
    const handleAddCompare = () => {
        let newQueue = [];

        newQueue.push(props.place);

        props.setCompareQueue(newQueue);

        //If it gets added -
        // let currentQueue = props.compareQueue;
        // let newQueue = currentQueue;
        // props.setCompareQueue(newQueue);
        // newQueue.push(props.place);
        // props.setCompareQueue(newQueue);
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
