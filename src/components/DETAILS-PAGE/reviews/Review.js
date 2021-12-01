const Review = props => {
    return <div className="reviews">
        <h2 className="detailsHeading">Reviews</h2>
        <div className="reviewCard">
        {props.reviews !== undefined ? props.reviews.map((review, index) => {
            return <div key={index} className="review">
                <p className="reviewHead">{review.author_name}</p>
                <p>Rating: {review.rating}</p>
                <p>{review.text}</p>
                
            </div>
        }) : "There are no reviews"}
        </div>

    </div>

    // const Review = props => {

    //         return (
    //             <div className="review">
    //                 <h2>User Reviews</h2>

    //                 {props.reviews.length > 0 && props.reviews.map((review, index)=>
    //                     <div key={index} className="reviewCards">
    //                     < ReviewCard reviews={props.reviews} />
    //                 </div>
    //                 )}

    //             </div>
    //         )
}


export default Review;