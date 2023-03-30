import React, { useEffect } from 'react';
import GoogleLogin from './GoogleLogin';
import { useNavigate } from 'react-router-dom';
import loginbg from "../images/loginbg.jpg";

//Submit button at bottom of love quiz links to Login page

const Login = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn === 'true') {
            navigate('/results');
        }
    }, [navigate]);

    const onSubmit = (user) => {
        console.log(user);
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/results');
    };

    return (
        <div className="LoginTwo-Page">
            <img src={loginbg} className="loginbg" />
            <GoogleLogin onSubmit={onSubmit} />
        </div>
    );
};

export default Login;
