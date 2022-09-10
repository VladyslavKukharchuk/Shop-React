import React from 'react';
import LoginForm from '../components/LoginForm';
import '../components/LoginForm.scss';
import RegistrationForm from '../components/RegistrationForm';

//переадресація при неавторизованому користувачі
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';
//переадресація при неавторизованому користувачі

function Login() {
    const { isAuth } = useAuth();

    return isAuth ? (
        <Navigate to="/" />
    ) : (
        <main>
            <div className="container">
                <div className="columns">
                    <LoginForm />
                    <RegistrationForm />
                </div>
            </div>
        </main>
    );
}

export default Login;