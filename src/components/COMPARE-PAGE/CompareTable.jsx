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
            <CompareLabels />

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
                        <form onSubmit={(event) => submitSearch(event)}>
                            <input
                                type="text"
                                name="search"
                                placeholder="Search Trails"
                                defaultValue={props.search || ""}
                                onChange={(event) => handleChangeSearch(event)}
                            />
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
