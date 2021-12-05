import React from "react";
import contactLogo from "../../assets/contactLogo.png";

const AboutUsContact = (props) => {
    return (
        <div className="AboutUsContact">
            <div className="AboutContactForm">
                <h2>Contact Us</h2>
                <div className="ContactSection">
                    <img src={contactLogo} alt="Contact" />
                    <form  className="contactForm" action="#">
                        <input className="AboutContactName contactInput" placeholder={"Name"} />
                        <input
                            className="AboutContactE-mail contactInput"
                            placeholder={"Email"}
                        />
                        <textarea
                            id="textarea"
                            name="textarea"
                            placeholder={"Message"}
                        ></textarea>
                            <button className="ContactButton">Send</button>
                    </form>
                </div>
            </div>
            
        </div>
    );
};

export default AboutUsContact;
