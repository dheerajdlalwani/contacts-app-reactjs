import React from "react";
import "./navbar.css";
import logoDark from "../../assets/logo-dark.svg"


const Navbar = () => {
    
    return (
        <React.Fragment>
            <section className="navbar-container">
                <section className="navbar-logo">
                    <img className="navbar-logo-image" src={logoDark}></img>
                    <span className="navbar-logo-name">Contacts</span>
                </section>
                <nav className="navbar">
                    <ul className="navbar-list">    
                        <li className="navbar-list-item">Docs</li>
                        <li className="navbar-list-item">About</li>
                        <li className="navbar-list-item">Login</li>
                        <li className="navbar-list-item cta-button">Register</li>
                    </ul>
                </nav>
            </section>
            
        </React.Fragment>
    )
}

export default Navbar;