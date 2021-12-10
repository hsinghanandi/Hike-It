import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ResultCard = (props) => {
    const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

    const handleChangeCheckBox = (event) => {
        let checkboxId = event.target.value;
        let newQueue = props.checkboxQueue.slice();

        if (event.target.checked === true) {
            axios
                .get(
                    `/place/details/json?key=${googleMapsApiKey}&place_id=${checkboxId}`
                )
                .then((res) => {
                    let isOpen = (res.data.result.opening_hours = {}
                        ? true
                        : res.data.result.opening_hours.open_now);

                    // let defaultImage = res.data.result.photoRef
                    //     ? res.data.result.photoRef[0]
                    //     : "Aap_uEBXkv44f3QYV_Fyncko8keODGAuysXL9KMMsEg44LEdyOylGH3NmK4jBHerSnY2mby0ZceEp3JH5I9QW6W5oxK4DAjUeoAxIABEUDNrn18uzceCC-VrXyvsQpQeuDi_KD8NSXqEvrZAfjtGWocLT05awgAnAFuWvUJFMRpmNfIAlyRg";

                    let newHike = {
                        name: res.data.result.name
                            ? res.data.result.name
                            : "Hike Name",
                        placeID: res.data.result.place_id,
                        photoRef: ` https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${res.data.result.photos[0].photo_reference}&key=${googleMapsApiKey}`,
                        address: res.data.result.vicinity,
                        status: isOpen,
                        weekdayText: res.data.result.opening_hours.weekday_text
                            ? res.data.result.opening_hours.weekday_text[0]
                                  .split(": ")
                                  .pop()
                            : `Open 24 Hours`,
                        rating: res.data.result.rating
                            ? res.data.result.rating
                            : 4,
                        latitude: res.data.result.geometry.location.lat,
                        longitude: res.data.result.geometry.location.lng,
                        types: res.data.result.types
                            ? res.data.result.types
                            : "park",
                        reviews: res.data.result.reviews,
                        phone: res.data.result.formatted_phone_number
                            ? res.data.result.formatted_phone_number
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

                            newQueue.push(newHike);
                            console.log(newHike);
                            props.setCheckboxQueue(newQueue);
                        });
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            let index = newQueue.findIndex((x) => x.placeID === checkboxId);
            if (index !== -1) {
                newQueue.splice(index, 1);
                props.setCheckboxQueue(newQueue);
                console.log("deleted", newQueue);
            }
        }
    };

    return (
        <div className="resultCardContent">


            <div className="resultCardDiv">
            <div className="resultCardImg">
                {props.photoRef ? (
                    <img
                        src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${props.photoRef}&key=${googleMapsApiKey}`}
                        alt={`${props.placeTitle}`}
                    />
                ) : (
                    <p>images</p>
                )}
            </div>

            <div className="resultCardText">
                <h2>
                    <Link
                        onClick={() => {
                            props.setPlaceID(props.placeID);
                        }}
                        to={"./DetailsPage"}
                    >
                        {props.name}
                    </Link>
                </h2>

                <h3>{props.vicinity}</h3>
                <h4>Rating: {props.rating}</h4>
            </div>

            </div>

            <div className = "checkboxDiv">
                <input
                    className="resultCardCheckbox"
                    type="checkbox"
                    value={props.placeID}
                    onChange={(event) => {
                        handleChangeCheckBox(event);
                    }}
                />
             </div>
        </div>
    );
};

export default ResultCard;
