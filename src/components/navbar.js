import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = () => {

    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light">
            <img className ="logo navbar-brand" src={logo} alt="Logo" />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Contributors">Contributors</Link>
                </li>

                <li className="nav-item">
                    <Link to="/LoginTwo">Login</Link>
                </li>

            </ul>
            </div>
        </nav>
    );
};

export default Navbar;