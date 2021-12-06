import React from "react";

const AboutGalleryCard = (props) => {
    return (
        <div>
            <img className="teamImg" src={props.imageSrc} alt="Member of the team" />
            <h2 className="teamName">{props.name}</h2>
            <p className="teamRole">{props.role}</p>
            <span>
                <a href={props.linkedin} title="Image from freepnglogos.com https://www.freepnglogos.com/pics/linkedin-logo-png" target="_blank" rel="noreferrer noopener" ><img src="https://www.freepnglogos.com/uploads/linkedin-logo-black-png-12.png" width="20" alt="linkedin logo black png" /></a>
            </span>
        </div>
    );
};

export default AboutGalleryCard;
