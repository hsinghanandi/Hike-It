import React from "react";

const ReviewText = props => {
    return ( 


        <div className="reviewText">

            {/* {props.reviews.length > 0 && props.reviews.map((review, index)=> 
            <div key={index}>{review[index].text}</div>)} */}
            <p>{props.reviews.length > 0 && props.reviews[0].text}</p>
        </div>
     );
}
 
export default ReviewText;
