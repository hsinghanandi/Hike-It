import React from "react";
import PopularHikeCard from "./PopularHikeCard";

const PopularHikes = (props) => {
    const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

    return (
        <div className="HomePopularHikes">
            <h2>Popular Trails</h2>
            <div className="HomePopularContainer">
                {/* Heron trail place_id = ChIJt53_q9xyhlQR8HVaqrNhf5E */}
                <PopularHikeCard
                    HomePopularImage={
                        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photoreference=Aap_uEAYE7EeR-PYm4L6eMi3nrDzFtb_irjJXSLH0iSGsyjW2jZnLgSmLlmldst760r_EsUZ-EcsfxC4_7A6Jwcnh6aXInABl89dOPNpuBkuHMzBkeZdC36FwaXBjSUGWDrEcWEpDmqPAhil79RneYx0Y8t5D7MS2jmXrdIbOPmnCknSznpU&key=${googleMapsApiKey}`
                    }
                    HomePopularTitle={"Heron Trail"}
                    HomePopularLocation={"Vancouver BC"}
                />
                {/* Camosun Bog place_id = ChIJu0VQ0RtzhlQRM5T90vS_CF4 */}
                <PopularHikeCard
                    HomePopularImage={
                        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photoreference=Aap_uEAAHJkDDjmAOXWJFxtEmf0pVu_GxrQcTPdpiGGcwS4ma32WDnkQFlWIW2xYyWaNS5LInlrZqdrImsEU03WLYe08UyHU1nwhnkHm-cAqvmVyzLk7dTZ5jI-OJX7r_lH_qrGcEnLb1NVWanbrWz29K6CUj-gjxV1d-Vw5ap5qP7si5ao&key=${googleMapsApiKey}`
                    }
                    HomePopularTitle={"Camosun Bog"}
                    HomePopularLocation={"Vancouver BC"}
                />
                {/* Iona Jetty place_id = ChIJH4ASXq4MhlQR2CLPbpxCdXs */}
                <PopularHikeCard
                    HomePopularImage={
                        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photoreference=Aap_uEBn2T6koMTkrmG_gO52VAwNOnP5jayKNnK8Ja0Y2cj6Po5sIShHWtP4IGZlBonxhNGAlq5Qf6ogNrEO2s1meGUyUUyR065E9KjYzbrR2Uk7btcvjjMxWN5TuEcruXJwrVoNZHM1Hw392KIqt1Smy4BbUDDGX7FAYDccqdPYr_45-Kss&key=${googleMapsApiKey}`
                    }
                    HomePopularTitle={"Iona Jetty"}
                    HomePopularLocation={"Richmond BC"}
                />
            </div>
        </div>
    );
};

export default PopularHikes;
