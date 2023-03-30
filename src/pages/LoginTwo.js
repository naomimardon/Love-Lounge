import React, { useEffect } from 'react';
import GoogleLogin from './GoogleLogin';
import { useNavigate } from 'react-router-dom';
import loginbg from "../images/loginbg.jpg";

//Login link in navbar links to LoginTwo page

const LoginTwo = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn === 'true') {
            navigate('/dashboard');
        }
    }, [navigate]);

    const onSubmit = (user) => {
        console.log(user);
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/dashboard');
    };

    return (
        <div className="LoginTwo-Page">
            <img src={loginbg} className="loginbg" />
            <GoogleLogin className="logingoogle" onSubmit={onSubmit} />
        </div>
    );
};

export default LoginTwo;
