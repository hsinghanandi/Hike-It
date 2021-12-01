import React from "react";
// import axios from "axios";

// import SliderImage from "./SliderImage";
// import SliderButton from "./SliderButton";



// class SliderComponents extends React.Component {
//     render() {
//         return (
//             <div className="sliderComponents">
//                 <SliderImage />
//                 <SliderButton />
//             </div>    
//         )
//     }
// }

const Slider = (props) => {
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
            {props.photoRef !== undefined ? props.photoRef.map((photo, index) => <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo}&key=${props.googleMapsApiKey}`} alt={`${props.placeTitle} ${index + 1}`}/>): <p>No images</p>}

        </div>
    )
}
 
export default Slider;