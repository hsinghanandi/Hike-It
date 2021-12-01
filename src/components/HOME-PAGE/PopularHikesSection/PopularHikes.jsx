import React from "react";
import PopularHikeCard from "./PopularHikeCard";

const PopularHikes = (props) => {
    return (
        <div className="HomePopularHikes">
            <h2>Popular Hikes Around You </h2>
            <div className="HomePopularContainer">
                <PopularHikeCard
                    HomePopularImage={
                        "https://images.unsplash.com/uploads/1413142095961484763cf/d141726c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
                    }
                    HomePopularTitle={"Stanley Park"}
                    HomePopularLocation={"Vancouver BC"}
                />
                <PopularHikeCard
                    HomePopularImage={
                        "https://images.unsplash.com/uploads/1413142095961484763cf/d141726c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
                    }
                    HomePopularTitle={"Stanley Park"}
                    HomePopularLocation={"Vancouver BC"}
                />
                <PopularHikeCard
                    HomePopularImage={
                        "https://images.unsplash.com/uploads/1413142095961484763cf/d141726c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
                    }
                    HomePopularTitle={"Stanley Park"}
                    HomePopularLocation={"Vancouver BC"}
                />
            </div>
        </div>
    );
};

export default PopularHikes;
