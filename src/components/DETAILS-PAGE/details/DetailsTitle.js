// import React, { useState, useEffect } from "react";
// import axios from "axios";

const DetailsTitle = (props) => {
    // const placeID = 'ChIJo-QmrYxxhlQRFuIJtJ1jSjY';
    // const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    // const [title, setTitle] = useState();

    // useEffect(() => {
    //     axios.get(`/place/details/json?key=${googleMapsApiKey}&place_id=${placeID}`)
    //     .then(res => {
    //         console.log(res.data.result.name);
    //         setTitle(res.data.result.name);
    //     })
    //     .catch(error => { console.log(error); });
    // }, [googleMapsApiKey, setTitle])

    return (
        <>
        {/* <h1 className="detailsTitle">
            Stanley Park            
        </h1> */}
        {/* <h2>{title}</h2> */}
            <div className="detailsHeadingTitle">{props.placeTitle}</div>
        </>
     );
}
 
export default DetailsTitle;