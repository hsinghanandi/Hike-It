import React from "react";

const AboutUsContact = (props) => {
    return (
        <div className="AboutUsContact">
            <div className="AboutContactForm">
                <h2>Contact Us</h2>
                <form action="#">
                    <input className="AboutContactName" placeholder={"Name"} />
                    <input
                        className="AboutContactE-mail"
                        placeholder={"E-mail"}
                    />
                    <textarea
                        id="textarea"
                        name="textarea"
                        rows="4"
                        cols="50"
                    ></textarea>
                </form>
            </div>
            <img src="https://picsum.photos/300/?random=2" alt="Contact" />
        </div>
    );
};

export default AboutUsContact;
