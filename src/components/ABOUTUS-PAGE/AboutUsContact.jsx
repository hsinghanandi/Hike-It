import React from "react";
import contactLogo from "../../assets/contactLogo.png";

const AboutUsContact = (props) => {
    return (
        <div className="AboutUsContact">
            <div className="AboutContactForm">
                <h2>Contact Us</h2>
                <div className="ContactScetion">
                    <img src={contactLogo} alt="Contact" />
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
                        <button className="ContactButton">Send</button>
                </form>
                </div>
            </div>
            
        </div>
    );
};

export default AboutUsContact;
