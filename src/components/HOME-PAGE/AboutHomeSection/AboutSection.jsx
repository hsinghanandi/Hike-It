import React from "react";
import homeAbout from "../../../assets/homeAbout.png";
import { ReactComponent as Arrow } from "../../../assets/arrow.svg";
import { Link } from "react-router-dom";

const AboutSection = (props) => {
    return (
        <div className="HomeAbout">
            <div className="HomeAboutInfo">
                <h2>About HikeIt</h2>
                <p>
                    HikeIt is a data-driven web platform that helps hiking
                    enthusiasts and outdoor adventurers plan their hikes by
                    providing them with the tools to discover, search and
                    compare different hiking trails.
                </p>
            </div>
            <Link to={"./AboutUsPage"}>
                More About Us <Arrow />
            </Link>
            <img src={homeAbout} alt="About HikeIt" />
        </div>
    );
};

export default AboutSection;
