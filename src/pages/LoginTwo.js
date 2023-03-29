import React, { useEffect } from 'react';
import GoogleLogin from './GoogleLogin';
import { useNavigate } from 'react-router-dom';

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
            <GoogleLogin onSubmit={onSubmit} />
        </div>
    );
};

export default LoginTwo;
