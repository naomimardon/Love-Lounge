import React, { useEffect } from 'react';
import GoogleLogin from './GoogleLogin';
import { useNavigate } from 'react-router-dom';

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
        <div>
            <GoogleLogin onSubmit={onSubmit} />
        </div>
    );
};

export default Login;
