import React from "react";

const AboutGalleryCard = (props) => {
    return (
        <div>
            <img src="https://picsum.photos/200/200" alt="Member of the team" />
            <h2>{props.name}</h2>
            <p>{props.role}</p>
            <span>
                <p>Links</p>
            </span>
        </div>
    );
};

export default AboutGalleryCard;
