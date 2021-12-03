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
                        "Plan your next hike with the right tools"
                    }
                />
                <FeatureCard
                    HomeFeatureImage={featured2}
                    HomeFeatureTitle={"Compare Hikes"}
                    HomeFeatureDescription={
                        "Compare between up to 4 hikes and choose how you want to see the information"
                    }
                />
                <FeatureCard
                    HomeFeatureImage={featured3}
                    HomeFeatureTitle={"Stay Updated"}
                    HomeFeatureDescription={
                        "Get the latest news related to hiking and your favorite trails"
                    }
                />
            </div>
        </div>
    );
};

export default FeatureSection;
