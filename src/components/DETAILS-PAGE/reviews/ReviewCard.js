import React from "react";
import ReviewText from "./ReviewText";
import ReviewRating from "./ReviewRating";
import ReviewAuthor from "./ReviewAuthor";


const ReviewCard = props => {
    
        return  (
            <div className="reviewCard">
                < ReviewText reviews ={props.reviews}/> 
                < ReviewRating reviews ={props.reviews}  />
                < ReviewAuthor reviews ={props.reviews} />
            </div>

        )
    }


export default ReviewCard;