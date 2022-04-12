import React from "react";

const ReviewRating = props => {
    return ( 
        <div className="reviewRating">
            Rating: {props.reviews.length > 0 && props.reviews[0].rating}
        </div>
     );
}
 
export default ReviewRating;