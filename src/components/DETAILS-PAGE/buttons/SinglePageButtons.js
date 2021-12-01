import React from "react";
import SaveHike from "./SaveHike";
import CompareButton from "./CompareButton";
import ScrollUp from "./ScrollUp";

const SinglePageButtons = (props) => {
    return (
        <div className="singlePageButtons">
            <SaveHike />
            <CompareButton
                setCompareQueue={props.setCompareQueue}
                placeID={props.placeID}
                compareQueue={props.compareQueue}
                place={props.place}
            />
            <ScrollUp />
        </div>
    );
};

export default SinglePageButtons;
