import React from 'react';
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            localStorage.clear();
            await logout();
            navigate('/homepage');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default LogoutButton;
