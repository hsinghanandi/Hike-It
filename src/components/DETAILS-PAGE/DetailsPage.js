import DetailsTitle from "./details/DetailsTitle";
import CompareButton from "./buttons/CompareButton";
import Slider from "./sliders/Slider";
import DetailsFeatures from "./details/DetailsFeatures";
import Map from "./maps/Map";
import Review from "./reviews/Review";
import { useState, useEffect } from "react";
import axios from "axios";

const DetailsPage = (props) => {
    //get placeID of all places in the search results
    // const placeID = 'ChIJo-QmrYxxhlQRFuIJtJ1jSjY';
    const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    // photoURL
    // const [photoURL, setPhotoURL] = useState([]);

    const [place, setPlace] = useState([]);

    /////////setting the types as array for the place////////
    const [types, setTypes] = useState([]);
    useEffect(() => {
        axios
            .get(
                `/place/details/json?key=${googleMapsApiKey}&place_id=${props.placeID}`
            )
            .then((result) => setTypes(result.data.result.types))
            .catch((error) => console.log(error));
    }, [googleMapsApiKey]);
    /////// end setting types as array for the place/////

    ////////// setting the reviews as an array ///////
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        let isMounted = true;

        axios
            .get(
                `/place/details/json?key=${googleMapsApiKey}&place_id=${props.placeID}`
            )
            .then((result) => {
                if (isMounted) {
                    setReviews(result.data.result.reviews);
                }
            })
            .catch((error) => console.log(error));

        return () => {
            isMounted = false;
        };
    }, [googleMapsApiKey]);

    useEffect(() => {
        axios
            .get(
                `/place/details/json?key=${googleMapsApiKey}&place_id=${props.placeID}`
            )
            .then((res) => {
                let isOpen = (res.data.result.opening_hours = {}
                    ? true
                    : res.data.result.opening_hours.open_now);

                let defaultImage = res.data.result.photos
                    ? res.data.result.photos.map(
                          (photo) => photo.photo_reference
                      )
                    : null;

                let difficulty;
                let difficultyNumber = Math.floor(Math.random() * 3 + 1);
                switch (difficultyNumber) {
                    case 1:
                        difficulty = "Beginner";
                        break;
                    case 2:
                        difficulty = "Intermediate";
                        break;
                    case 3:
                        difficulty = "Hard";
                        break;
                    default:
                        break;
                }

                let newPlace = {
                    name: res.data.result.name
                        ? res.data.result.name
                        : "Hike Name",
                    placeID: res.data.result.place_id,
                    photoRef: defaultImage,
                    address: res.data.result.formatted_address,
                    status: isOpen,
                    weekdayText: res.data.result.opening_hours.weekday_text
                        ? res.data.result.opening_hours.weekday_text[0]
                              .split(": ")
                              .pop()
                        : `Open 24 Hours`,
                    rating: res.data.result.rating ? res.data.result.rating : 4,
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
                    difficulty: difficulty,
                };

                return newPlace;
            })
            .then((newPlace) => {
                axios
                    .get(
                        `/elevation/json?key=${googleMapsApiKey}&locations=${newPlace.latitude},${newPlace.longitude}`
                    )
                    .then((results) => {
                        let elevation = results.data.results[0].elevation;

                        newPlace.elevation = Math.round(elevation);

                        setPlace(newPlace);
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const [saveHikeButtonText, setSaveHikeButtonText]= useState("Save Hike")

    const saveHike = () => {
        console.log("SAVE HIKE BUTTON CLICKED");
        setSaveHikeButtonText("Added to Saved Hikes");
        axios
            .post(`${props.SERVER_LOCATION}/hikeit/api/v1/save-hike`, place)
            .then((response) => {
                console.log("DATA SENT to save the hike!", response);
            })
            .catch((error) => {
                console.log(error.response);
            });
    };

    // Slider
    // const [current, setCurrent] = useState(0);
    // let nextSlide ;
    // let prevSlide ;

    // if (place.photoRef) {
    //     const length = place.photoRef.length;

    //     nextSlide = () => {
    //         setCurrent(current === length - 1 ? 0 : current + 1);
    //     };

    //     prevSlide = () => {
    //         setCurrent(current === 0 ? length - 1 : current - 1);
    //     };

    //     if (!Array.isArray(props.photoRef) || props.photoRef.length <= 0) {
    //         return null;
    //     }
    // }

        
    return (
        <div className="DetailsPage">
            <div className="content">
                <DetailsTitle placeTitle={place.name} />

                <div className="detailsPageButtons">

                <CompareButton
                    place={place}
                    compareQueue={props.compareQueue}
                    setCompareQueue={props.setCompareQueue}
                />


                <button className="saveHikeButton" onClick={() => saveHike()}>{saveHikeButtonText}</button>


                </div>

                

                <Slider
                    photoRef={place.photoRef}
                    googleMapsApiKey={googleMapsApiKey}
                    placeTitle={place.name}  
                />
            </div>

            <div className="detailsSection">
                <DetailsFeatures place={place} />
            </div>

            <Map latitude={place.latitude} longitude={place.longitude} />
            <Review reviews={place.reviews} />
        </div>
    );
};

export default DetailsPage;
