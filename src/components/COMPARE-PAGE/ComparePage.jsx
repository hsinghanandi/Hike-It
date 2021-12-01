import React, { useState } from "react";
import CompareTable from "./CompareTable";
import CompareToggle from "./CompareToggle";

const ComparePage = (props) => {
    const [graphToggle, setGraphToggle] = useState();

    return (
        <div>
            <h2> Hike Comparison </h2>
            <CompareToggle
                setGraphToggle={setGraphToggle}
                graphToggle={graphToggle}
            />
            <div className="compareContent">
                {graphToggle !== false ? (
                    <CompareTable
                        compareQueue={props.compareQueue}
                        setCompareQueue={props.setCompareQueue}
                    />
                ) : (
                    <p>Graph</p>
                )}
            </div>
        </div>
    );
};

export default ComparePage;
