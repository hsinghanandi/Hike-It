import React from "react";

const Slider = (props) => {


    return (
        <div className="imageGrid">
            {props.photoRef
                ? props.photoRef.map((photo, index) => (

                        <img
                            src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo}&key=${props.googleMapsApiKey}`}
                            alt={`${props.placeTitle} ${index + 1}`}
                        />

                  ))
                : null}
        </div>   


    );
}


export default Slider;
