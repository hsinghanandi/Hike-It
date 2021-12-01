const SavedHikeImage = ({ imageRef, title }) => {
    const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    return (
        <img
            id='savedHikeImage'
            src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${imageRef}&key=${googleMapsApiKey}`}
            alt={title}
        />
    );
};

export default SavedHikeImage;
