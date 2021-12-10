import React from "react";

import AboutGalleryCard from "./AboutGalleryCard";
import amirPic from "../../assets/team/amir.png";
import kausyPic from "../../assets/team/kausy.png";
import javierPic from "../../assets/team/javier.png";
import harmanPic from "../../assets/team/harman.png";
import rachelPic from "../../assets/team/rachel.png";
import gargiPic from "../../assets/team/gargi.png";
import navjitPic from "../../assets/team/navjit.png";

const AboutGallery = (props) => {
    return (
        <div className="AboutGallery" >
            <div className="AboutUsGalleryDesigners">
                <AboutGalleryCard
                    linkedin="http://linkedin.com/in/amirbehbahani"
                    imageSrc={amirPic}
                    name="Behbahani, Amir"
                    role="UI/UX Designer "
                />
                <AboutGalleryCard
                    linkedin="https://ca.linkedin.com/in/kaustubh-kashyup/"
                    imageSrc={kausyPic}
                    name="Kashyup, Kaustubh"
                    role="UI/UX Designer "
                />
                <AboutGalleryCard 
                    linkedin="www.linkedin.com/in/NavjitKaur2199"
                    imageSrc={navjitPic}
                    name="Kaur, Navjit" 
                    role="UI/UX Designer " 
                />
            </div>
            <div
                className="AboutUsGalleryDevelopers"
            >
                <AboutGalleryCard
                    linkedin=""
                    imageSrc={javierPic}
                    name="Leon Ortega, Javier"
                    role="Full-Stack Developer"
                />
                <AboutGalleryCard
                    linkedin="https://www.linkedin.com/in/hsinghanandi/"
                    imageSrc={harmanPic}
                    name="Singh, Harmandeep"
                    role="Full-Stack Developer"
                />
                <AboutGalleryCard
                    linkedin="https://www.linkedin.com/in/rachel-ta-1a6873129/"
                    imageSrc={rachelPic}
                    name="Ta, Rachel"
                    role="Full-Stack Developer"
                />
                <AboutGalleryCard
                    linkedin="https://www.linkedin.com/in/gargithakur94/"
                    imageSrc={gargiPic}
                    name="Thakur, Gargi"
                    role="Full-Stack Developer"
                />
            </div>
        </div>
    );
};

export default AboutGallery;
