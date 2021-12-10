import React from "react";
import FeatureCard from "./FeatureCard";
import featured1 from "../../../assets/feature1.png";
import featured2 from "../../../assets/feature2.png";
import featured3 from "../../../assets/feature3.png";

const FeatureSection = (props) => {
    return (
        <div className="HomeFeatures">
            <div className="HomeFeatureContainer">
                <FeatureCard
                    HomeFeatureImage={featured1}
                    HomeFeatureTitle={"Find Hikes"}
                    HomeFeatureDescription={
                        "Search hikes around you and find out detailed information about them."
                    }
                />
                <FeatureCard
                    HomeFeatureImage={featured2}
                    HomeFeatureTitle={"Compare Hikes"}
                    HomeFeatureDescription={
                        "Compare upto 4 hikes and choose the one which is best for you."
                    }
                />
                <FeatureCard
                    HomeFeatureImage={featured3}
                    HomeFeatureTitle={"Stay Updated"}
                    HomeFeatureDescription={
                        "Get latest news and alerts related to the hike to stay updated."
                    }
                />
            </div>
        </div>
    );
};

export default FeatureSection;
