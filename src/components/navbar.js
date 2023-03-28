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
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Contributors">Contributors</Link>
                </li>
                <li className="nav-item">
                    <button className='loginButton' onClick={() => signupWithGoogle()}>Login</button>
                </li>

            </ul>
        </nav>
    );
};

export default Navbar;
