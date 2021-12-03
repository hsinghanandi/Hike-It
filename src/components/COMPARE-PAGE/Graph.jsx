import React from "react";
import { Bar } from "react-chartjs-2";

const Graph = (props) => {
    let ratings = props.compareNow.map((hike) => (hike = hike.rating));
    let names = props.compareNow.map((hike) => (hike = hike.name));
    let elevations = props.compareNow.map((hike) => (hike = hike.elevation));

    return (
        <div>
            <div className="chart-wrapper">
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
                            {
                                label: "Elevation",
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
        </div>
    );
};

export default Graph;
