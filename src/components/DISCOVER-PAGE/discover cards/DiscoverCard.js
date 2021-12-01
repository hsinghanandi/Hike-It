import React from "react";
import DiscoverImage from "./DiscoverImage";
import DiscoverReview from "./DiscoverReview";
import DiscoverTitle from "./DiscoverTitle";


export default function DiscoverCard(){
    return(
        <div className="discoverCards">
            <DiscoverImage />
            <DiscoverTitle />
            <DiscoverReview />
        </div>
    )
}