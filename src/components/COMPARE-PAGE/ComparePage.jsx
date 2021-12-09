import React, { useState, useEffect } from "react";
import CompareTable from "./CompareTable";
import CompareToggle from "./CompareToggle";
import Graph from "./Graph";

const ComparePage = (props) => {
    const [graphToggle, setGraphToggle] = useState();
    const [compareNow, setCompareNow] = useState([]);

    useEffect(() => {
        let tableArr = props.compareQueue.slice(0, 4);

        setCompareNow(tableArr);
        console.log(tableArr);
    }, [props.compareQueue]);

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
                        compareNow={compareNow}
                    />
                ) : (
                    <Graph compareNow={compareNow} />
                )}
            </div>
            <CompareToggle
                setGraphToggle={setGraphToggle}
                graphToggle={graphToggle}
            />
        </div>
    );
};

export default ComparePage;
