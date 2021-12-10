import React, { useState } from "react";
import CompareHike from "./CompareHike";
import CompareLabels from "./CompareLabels";
import axios from "axios";

const CompareTable = (props) => {
    const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

    const [search, setSearch] = useState();

    const handleChangeSearch = (event) => {
        setSearch(event.target.value);
    };

    // Submit Search
    const submitSearch = (event) => {
        event.preventDefault();

        axios
            .get(
                `/place/nearbysearch/json?location=49.282730,-123.120735&keyword=${search}&key=${googleMapsApiKey}&radius=30000`
            )
            .then((res) => {
                let isOpen = (res.data.results[0].opening_hours = {}
                    ? true
                    : res.data.results[0].opening_hours.open_now);

                const handlePhoto = (source) => {
                    if (source !== undefined) {
                        return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${source[0].photo_reference}&key=${googleMapsApiKey}`;
                    } else {
                        return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=Aap_uEBXkv44f3QYV_Fyncko8keODGAuysXL9KMMsEg44LEdyOylGH3NmK4jBHerSnY2mby0ZceEp3JH5I9QW6W5oxK4DAjUeoAxIABEUDNrn18uzceCC-VrXyvsQpQeuDi_KD8NSXqEvrZAfjtGWocLT05awgAnAFuWvUJFMRpmNfIAlyRg&key=${googleMapsApiKey}`;
                    }
                };

                let newHike = {
                    name: res.data.results[0].name
                        ? res.data.results[0].name
                        : "Hike Name",
                    placeID: res.data.results[0].place_id,
                    photoRef: handlePhoto(res.data.results[0].photos),
                    address: res.data.results[0].vicinity,
                    status: isOpen,
                    weekdayText: res.data.results[0].opening_hours.weekday_text
                        ? res.data.results[0].opening_hours.weekday_text[0]
                              .split(": ")
                              .pop()
                        : `Open 24 Hours`,
                    rating: res.data.results[0].rating
                        ? res.data.results[0].rating
                        : 4,
                    latitude: res.data.results[0].geometry.location.lat,
                    longitude: res.data.results[0].geometry.location.lng,
                    types: res.data.results[0].types
                        ? res.data.results[0].types
                        : "park",
                    reviews: res.data.results[0].reviews,
                    phone: res.data.results[0].formatted_phone_number
                        ? res.data.results[0].formatted_phone_number
                        : null,
                    province: "British Columbia",
                };

                return newHike;
            })
            .then((newHike) => {
                axios
                    .get(
                        `/elevation/json?key=${googleMapsApiKey}&locations=${newHike.latitude},${newHike.longitude}`
                    )
                    .then((results) => {
                        let elevation = results.data.results[0].elevation;

                        newHike.elevation = elevation;

                        let newQueue = props.compareNow.slice();
                        newQueue.pop();
                        newQueue.unshift(newHike);
                        props.setCompareNow(newQueue);
                    });
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    return (
        <div className="CompareTable">
            {props.compareNow[0] ? <CompareLabels /> : null}

            {props.compareNow ? (
                props.compareNow.map((hike, index) =>
                    hike ? (
                        <CompareHike
                            key={index}
                            setCompareQueue={props.setCompareQueue}
                            compareQueue={props.compareQueue}
                            currentHike={hike}
                            compareNow={props.compareNow}
                            setCompareNow={props.setCompareNow}
                        />
                    ) : (
                        <form
                        key={index}
                            onSubmit={(event) => submitSearch(event)}
                            className="searchBar-comparison"
                        >
                            <input
                            
                             className="searchBar-comparison-input"
                                type="text"
                                name="search"
                                placeholder="Search For Trails"
                                defaultValue={props.search || ""}
                                onChange={(event) => handleChangeSearch(event)}
                            />
                            <svg
                                width="26"
                                height="26"
                                viewBox="0 0 26 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M22.9832 25.4105L14.4179 16.8365C10.6076 19.5477 5.35714 18.8845 2.33932 15.3109C-0.678503 11.7372 -0.456912 6.44535 2.84908 3.13697C6.15421 -0.172862 11.4422 -0.395597 15.0135 2.62459C18.5848 5.64478 19.2478 10.9001 16.5386 14.714L25.104 23.288L22.9847 25.409L22.9832 25.4105ZM9.20676 3.49995C6.36469 3.49931 3.91273 5.49598 3.33539 8.28112C2.75805 11.0663 4.21401 13.8744 6.82177 15.0053C9.42954 16.1363 12.4724 15.2792 14.108 12.953C15.7437 10.6269 15.5226 7.47094 13.5786 5.39597L14.4853 6.29597L13.4632 5.27597L13.4452 5.25797C12.3238 4.12873 10.7975 3.49566 9.20676 3.49995Z"
                                    fill="#FF5A1F"
                                />
                            </svg>
                        </form>
                    )
                )
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default CompareTable;
