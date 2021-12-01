import React from "react";

import AboutGalleryCard from "./AboutGalleryCard";

const AboutGallery = (props) => {
    return (
        <div>
            <div className="AboutUsGalleryDesigners">
                <AboutGalleryCard
                    name="Behbahani, Amir"
                    role="UI/UX Designer "
                />
                <AboutGalleryCard
                    name="Kashyup, Kaustubh"
                    role="UI/UX Designer "
                />
                <AboutGalleryCard name="Kaur, Navjit" role="UI/UX Designer " />
            </div>
            <div
                className="AboutUsGalleryDevelopers {
"
            >
                <AboutGalleryCard
                    name="Leon Ortega, Javier"
                    role="Full-Stack Developer"
                />
                <AboutGalleryCard
                    name="Singh, Harmandeep"
                    role="Full-Stack Developer"
                />
                <AboutGalleryCard
                    name="Ta, Rachel"
                    role="Full-Stack Developer"
                />
                <AboutGalleryCard
                    name="Thakur, Gargi"
                    role="Full-Stack Developer"
                />
            </div>
        </div>
    );
};

export default AboutGallery;
