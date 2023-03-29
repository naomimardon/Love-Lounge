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
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div style={{ textAlign: "center" }}>
            <button style={{ cursor: "pointer", scale: "1.5", width: "200px" }} onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default LogoutButton;
