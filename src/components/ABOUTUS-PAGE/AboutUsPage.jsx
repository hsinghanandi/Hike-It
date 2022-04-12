import React from "react";

import AboutUsPageIntro from "./AboutIntro";
import AboutGallery from "./AboutGallery";
import AboutUsContact from "./AboutUsContact";

const AboutUsPage = (props) => {
    return (
        <div className="AboutUs">
            <AboutUsPageIntro />
            <AboutGallery />
            <AboutUsContact />
        </div>
    );
};

export default AboutUsPage;