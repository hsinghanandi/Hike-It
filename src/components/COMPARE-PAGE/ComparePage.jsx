import React, { useState, useEffect } from "react";
import CompareTable from "./CompareTable";
import CompareToggle from "./CompareToggle";
import Graph from "./Graph";

const ComparePage = (props) => {
    const [graphToggle, setGraphToggle] = useState();
    const [compareNow, setCompareNow] = useState([]);

    useEffect(() => {
        //limit to 4
        let tableArr = props.compareQueue.slice(0, 4);

        for (let index = 0; index < 4; index++) {
            if (tableArr[index] === undefined) {
                tableArr.push(null);
            }
        }

        setCompareNow(tableArr);
    }, [props.compareQueue]);

    return (
        <div>
            <h2 className="comparison-title"> Hike Comparison </h2>
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
                        setCompareNow={setCompareNow}
                        submitSearch={props.submitSearch}
                    />
                ) : (
                    <Graph compareNow={compareNow} />
                )}
            </div>
        </div>
    );
};

export default ComparePage;
