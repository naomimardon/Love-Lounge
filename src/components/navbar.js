import React, { useEffect } from "react";
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
                    <Link to="/contributors">Contributors</Link>
                </li>
                {/* <li class="nav-item">
                    <Link to="/Login">Login</Link>
                </li> */}
                <button onClick={() => signupWithGoogle()}>Login</button>
                <button onClick={() => logout()}>Logout</button>

            </ul>
        </nav>
    );
};

export default Navbar;
