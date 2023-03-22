import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contributors">Contributors</NavLink>
            <NavLink to="/login">Login</NavLink>
        </nav>
    );
};

export default Navbar;