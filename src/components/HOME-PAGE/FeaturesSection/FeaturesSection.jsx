import React from "react";
import FeatureCard from "./FeatureCard";

const FeatureSection = (props) => {
    return (
        <div className="HomeFeatures">
            <h2>Our Features</h2>
            <div className="HomeFeatureContainer">
                <FeatureCard
                    HomeFeatureImage={"https://picsum.photos/300/?random=1"}
                    HomeFeatureTitle={"Feature Title"}
                    HomeFeatureDescription={
                        "Lorem ipsum dolor sit amet, an illum ceteros urbanitas vel, ex doming atomorum per. "
                    }
                />
                <FeatureCard
                    HomeFeatureImage={"https://picsum.photos/300/?random=2"}
                    HomeFeatureTitle={"Feature Title"}
                    HomeFeatureDescription={
                        "Lorem ipsum dolor sit amet, an illum ceteros urbanitas vel, ex doming atomorum per. "
                    }
                />
                <FeatureCard
                    HomeFeatureImage={"https://picsum.photos/300/?random=3"}
                    HomeFeatureTitle={"Feature Title"}
                    HomeFeatureDescription={
                        "Lorem ipsum dolor sit amet, an illum ceteros urbanitas vel, ex doming atomorum per. "
                    }
                />
            </div>
        </div>
    );
};

export default FeatureSection;
