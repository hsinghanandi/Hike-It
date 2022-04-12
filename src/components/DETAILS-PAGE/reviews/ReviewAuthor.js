import React from "react";

const ReviewAuthor = props => {
    return ( 
        <div className="reviewAuthor">
            User: {props.reviews.length > 0 && props.reviews[0].author_name}
        </div>
     );
}
 
export default ReviewAuthor;