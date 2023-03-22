import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="links">
            <ul class="nav justify-content-end">
                <li class="nav-item">
                    <Link to="/">Home</Link>
                </li>
                <li class="nav-item">
                    <Link to="/contributors">Contributors</Link>
                </li>
                <li class="nav-item">
                    <Link to="/Login">Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
