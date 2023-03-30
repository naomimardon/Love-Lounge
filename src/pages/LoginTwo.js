import React, { useEffect } from 'react';
import GoogleLogin from './GoogleLogin';
import { useNavigate } from 'react-router-dom';
import loginbg from "../images/loginbg.jpg";

const LoginTwo = () => {
    const navigate = useNavigate();

    {/* useEffect hook checks if isLoggedIn is true and then navigates user to results.js */ }

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn === 'true') {
            navigate('/dashboard');
        }
    }, [navigate]);

    {/* When user logs in, isLoggedIn is set to true in localstorage and user is navigated to results.js*/ }
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
