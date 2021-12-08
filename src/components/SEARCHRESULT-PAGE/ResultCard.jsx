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
                    let newHike = {
                        name: res.data.result.name,
                        placeID: res.data.result.place_id,
                        photoRef: res.data.result.photos.map(
                            (photo) => photo.photo_reference
                        ),
                        address: res.data.result.formatted_address,
                        status: "Open",
                        weekdayText: "All Year Round",
                        rating: res.data.result.rating,
                        latitude: res.data.result.geometry.location.lat,
                        longitude: res.data.result.geometry.location.lng,
                        types: res.data.result.types,
                        phoneNumber: res.data.result.formatted_phone_number,
                        vicinity: res.data.result.vicinity,
                        website: res.data.result.website,
                        reviews: res.data.result.reviews,
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
            <input
                className="resultCardCheckbox"
                type="checkbox"
                value={props.placeID}
                onChange={(event) => {
                    handleChangeCheckBox(event);
                }}
            />
        </div>
    );
};

export default ResultCard;
