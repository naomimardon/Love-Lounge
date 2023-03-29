import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="links">
            <ul className="nav justify-content-end">
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
        </nav>
    );
};

export default Navbar;