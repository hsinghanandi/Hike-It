import React from "react";
import { axios } from "axios";

import { useEffect, useState } from "react";
// endpoints

const Api = (props) => {
    const [nearbySearch, setNearbySearch] = useState([]);

    useEffect(() => {
        axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=49.282730,-123.120735&keyword=hiking+routes&key=AIzaSyAHsKZ0Z3z-QEFb1LDouaRMhfNbS0rzb8Y&radius=25000')
            .then(result => {
                setNearbySearch(result.data.results)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    console.log(nearbySearch);
}

export default Api;