import DetailsTitle from './details/DetailsTitle';
import CompareButton from './buttons/CompareButton';
import Slider from './sliders/Slider';
import DetailsFeatures from './details/DetailsFeatures';
import Map from './maps/Map';
import Review from './reviews/Review';
import { useState, useEffect } from 'react';
import axios from 'axios';

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
                console.log(res.data.result);
                // setPhotoURL(res.data.result.photos);
                // res.data.result.photos.map(photo => setPhotoURL(photo.photo_reference));
                setPlace({
                    name: res.data.result.name,
                    placeID: res.data.result.place_id,
                    // photoRef: res.data.result.photos[0].photo_reference,
                    photoRef: res.data.result.photos.map(
                        (photo) => photo.photo_reference
                    ),
                    address: res.data.result.formatted_address,
                    status: res.data.result.opening_hours.open_now,
                    weekdayText: res.data.result.opening_hours.weekday_text,
                    rating: res.data.result.rating,
                    // photos: res.data.result.photos[0].html_attributions,
                    latitude: res.data.result.geometry.location.lat,
                    longitude: res.data.result.geometry.location.lng,
                    types: res.data.result.types,
                    phoneNumber: res.data.result.formatted_phone_number,
                    vicinity: res.data.result.vicinity,
                    website: res.data.result.website,
                    reviews: res.data.result.reviews,
                });
                return res.data.result;
            })
            .catch((error) => {
                console.log(error.response);
            });
    }, []);

    const saveHike = () => {
        console.log('SAVE HIKE BUTTON CLICKED');
        axios
            .post(`${props.SERVER_LOCATION}/hikeit/api/v1/save-hike`, place)
            .then((response) => {
                console.log('DATA SENT to save the hike!', response);
            })
            .catch((error) => {
                console.log(error.response);
            });
    };

    return (
        <div className='DetailsPage'>
            <div className='content'>
                <DetailsTitle placeTitle={place.name} />

                <CompareButton
                    place={place}
                    compareQueue={props.compareQueue}
                    setCompareQueue={props.setCompareQueue}
                />
                <button onClick={() => saveHike()}>Save Hike</button>
                <Slider
                    photoRef={place.photoRef}
                    googleMapsApiKey={googleMapsApiKey}
                    placeTitle={place.name}
                />
            </div>

            <div className='detailsSection'>
                <DetailsFeatures
                    address={place.address}
                    status={place.status}
                    rating={place.rating}
                    types={types}
                    vicinity={place.vicinity}
                    phoneNumber={place.phoneNumber}
                    openingDays={place.weekdayText}
                    website={place.website}
                />
            </div>

            <Map latitude={place.latitude} longitude={place.longitude} />
            <Review reviews={place.reviews} />
        </div>
    );
};

export default DetailsPage;
