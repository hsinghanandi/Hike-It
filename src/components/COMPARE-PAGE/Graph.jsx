import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

const Graph = (props) => {
    const [chartToggle, setChartToggle] = useState(true);

    const handleChartToggle = (event) => {
        setChartToggle(event.target.checked);
    };

    let ratings = props.compareNow.map((hike) => (hike ? hike.rating : 0));
    let names = props.compareNow.map((hike) => (hike ? hike.name : " "));
    let elevations = props.compareNow.map((hike) =>
        hike ? hike.elevation : 0
    );

    return (
        <div>
            {chartToggle == false ? (
                <div className="chart-wrapper-rating chart-compare">
                    <Bar
                        data={{
                            //hikes
                            labels: names,

                            //hikeData type
                            datasets: [
                                {
                                    label: "Rating",
                                    //column
                                    data: ratings,
                                    backgroundColor: [
                                        "rgba(255, 99, 132, 0.9)",
                                        "rgba(54, 162, 235, 0.9)",
                                        "rgba(255, 206, 86, 0.9)",
                                        "rgba(75, 192, 192, 0.9)",
                                    ],
                                    borderColor: [
                                        "rgba(255, 99, 132, 1)",
                                        "rgba(54, 162, 235, 1)",
                                        "rgba(255, 206, 86, 1)",
                                        "rgba(75, 192, 192, 20)",
                                    ],
                                    borderWidth: 1,
                                },
                            ],
                        }}
                        options={{
                            responsive: true,
                            scales: {
                                yAxes: [
                                    {
                                        ticks: {
                                            beginAtZero: true,
                                        },
                                    },
                                ],
                            },
                        }}
                    />
                </div>
            ) : (
                <div className="chart-wrapper-elevation chart-compare">
                    <Bar
                        data={{
                            //hikes
                            labels: names,

                            //hikeData type
                            datasets: [
                                {
                                    label: "Elevation m",
                                    //column
                                    data: elevations,
                                    backgroundColor: [
                                        "rgba(255, 99, 132, 0.9)",
                                        "rgba(54, 162, 235, 0.9)",
                                        "rgba(255, 206, 86, 0.9)",
                                        "rgba(75, 192, 192, 0.9)",
                                    ],
                                    borderColor: [
                                        "rgba(255, 99, 132, 1)",
                                        "rgba(54, 162, 235, 1)",
                                        "rgba(255, 206, 86, 1)",
                                        "rgba(75, 192, 192, 20)",
                                    ],
                                    borderWidth: 1,
                                },
                            ],
                        }}
                        options={{
                            responsive: true,
                            scales: {
                                yAxes: [
                                    {
                                        ticks: {
                                            beginAtZero: true,
                                        },
                                    },
                                ],
                            },
                        }}
                    />
                </div>
            )}

            <div className="graph-toggle">
                <input
                    className="graph-toggle-checkbox"
                    type="checkbox"
                    onChange={(event) => {
                        handleChartToggle(event);
                    }}
                    defaultChecked="false"
                />
                <label className="graph-toggle-label">
                    <span className="graph-toggle-span">Rating</span>
                </label>
            </div>
        </div>
    );
};

export default Graph;
