import React from "react";
import "./landing.css";
import logoDark from "../../assets/logo-dark.svg"
import {
	Navbar
} from '../../components';

const Landing = () => {

    const contactTranslations = [
        "Contacts",
    ]

    return (
        <React.Fragment>
            <Navbar />
            <section className="landing">
                <section className="landing-content">
                    <h1 className="landing-tagline">The Contact Book for the simple minded.</h1>
                    <br></br>
                    <span className="landing-sub-text">
                        The easiest way to Save and Access your contacts from anywhere in the world. Say hello to simplicity. <strong>Contacts is free forever.</strong>
                    </span>
                </section>
                <section className="logo">
                    <img className="logo-image" src={logoDark}></img>
                </section>
            </section>
            
        </React.Fragment>
    )
};

export default Landing;