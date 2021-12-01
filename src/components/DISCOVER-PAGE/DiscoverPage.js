import React from "react";
import DiscoverCard from "./discover cards/DiscoverCard";
import SortButton from "./sort button/SortButton";
import FilterButton from "./filter button/FilterButton";
// import DiscoverMap from "./discover map/DiscoverMap";

export default function DiscoverPage() {
    return (
        <div className="discoverPage">
            <div className="discoverButtons">
                <SortButton />
                <FilterButton />
            </div>
            <div className="discoverMain">
                <DiscoverCard />
                <DiscoverCard />
                <DiscoverCard />
                <DiscoverCard />
                <DiscoverCard />
                <DiscoverCard />
                <DiscoverCard />
                <DiscoverCard />
                <DiscoverCard />
            </div>
            <div className="discoverMap">
                {/* < DiscoverMap googleMapURL /> */}
            </div>
        </div>
    );
}
