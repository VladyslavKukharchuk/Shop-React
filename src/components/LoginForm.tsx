import { info } from 'console';
import React from 'react';
import { useState } from 'react';

//імпорт для Firebase + Redux-Toolkit
import { useAppDispatch } from '../hooks/redux-hooks';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from '../store/slice/userSlice';
//імпорт для Firebase + Redux-Toolkit

//Для переадресації після вдалого логіну
import {useNavigate} from 'react-router-dom';
//Для переадресації після вдалого логіну

function LoginForm(props: any) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    //функція логіну в Firebase
    const dispatch = useAppDispatch();
    //хук для переадресації
    const navigate = useNavigate();
    //хук для переадресації

    const handleLogin = (event: React.FormEvent<HTMLFormElement>, email: string, password: string) => {
        event.preventDefault();

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
                console.log(error.code);
                console.log(error.message);
            });
    }
    //функція логіну в Firebase


    return (
        <form id="LoginForm" className="userForm" onSubmit={(event) => handleLogin(event, email, pass)}>
            <p className="title">Secure Sign In</p>
            <p className="desription">For current customers</p>
            <div className="error">Invalid email address or password.</div>
            <label>
                <input
                    type="email"
                    placeholder="Email Address"
                    data-name="email"
                    // defaultValue="ivan@gmail.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label>
                <input
                    type="password"
                    placeholder="Password"
                    data-name="password"
                    // defaultValue={123}
                    required
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                />
            </label>
            <button className="btn">Sign in</button>
        </form>
    );
}

export default LoginForm;