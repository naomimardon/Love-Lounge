import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";


const Navbar = () => {
    const { currentUser, loggedIn, signupWithGoogle, logout } = useAuth()
    useEffect(
        () => {
            if (currentUser) {

            };
        }, [loggedIn]
    )

    return (
        <nav className="links">
            <ul class="nav justify-content-end">
                <li class="nav-item">
                    <Link to="/">Home</Link>
                </li>
                <li class="nav-item">
                    <Link to="/Contributors">Contributors</Link>
                </li>
                <li class="nav-item">
                    <Link to="/Login">Login</Link>
                </li>

            </ul>
        </nav>
    );
};

export default Navbar;
