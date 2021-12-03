import React, { useEffect, useState } from "react";
import CompareHike from "./CompareHike";
import CompareLabels from "./CompareLabels";

const CompareTable = (props) => {
    return (
        <div className="CompareTable">
            <CompareLabels />

            {props.compareNow ? (
                props.compareNow.map((hike, index) =>
                    typeof hike == "object" ? (
                        <CompareHike
                            key={index}
                            setCompareQueue={props.setCompareQueue}
                            compareQueue={props.compareQueue}
                            currentHike={hike}
                            compareNow={props.compareNow}
                            setCompareNow={props.setCompareNow}
                        />
                    ) : (
                        <div className="CompareHike-options">
                            <input
                                type="text"
                                name="replace"
                                placeholder="replaceHike"
                            />
                        </div>
                    )
                )
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default CompareTable;
