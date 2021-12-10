import React from "react";
import ImageGallery from 'react-image-gallery';
import { useState, useEffect } from "react";

const Slider = (props) => {
    //create state for the image carousel
    
    
    // const [sliderImages, setSliderImages] = useState([]);

    // useEffect(() => {
    //     axios.get(`/place/photo?maxwidth=400photo_reference=${props.placePhoto}&key=${props.googleMapsApiKey}`)
    //     .then(res => {
    //         console.log(res.data)
    //         setSliderImages(res.data);
    //     })
    //     .catch(error => { console.log(error); });
    // }, [props.photo_reference, props.googleMapsApiKey, props.placePhoto]);

    return (
        <div className="imageGrid">

            {props.photoRef ? (
                props.photoRef.map((photo, index) => (
                    <img
                        src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo}&key=${props.googleMapsApiKey}`}
                        alt={`${props.placeTitle} ${index + 1}`}
                    />

                   

                    
                ))
            ) : (
                <></>
            )}



      

            
        </div>
    );
};

export default Slider;
