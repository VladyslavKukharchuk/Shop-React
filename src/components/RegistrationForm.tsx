import React from 'react';
import { useState } from 'react';

//імпорт для Firebase + Redux-Toolkit
import { useAppDispatch } from '../hooks/redux-hooks';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from '../store/slice/userSlice';
//імпорт для Firebase + Redux-Toolkit

//імпорт хука для переадресації
import {useNavigate} from 'react-router-dom';
//імпорт хука для переадресації

function RegistrationForm(props: any) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [passVerify, setPassVerify] = useState('');

    //функція реєстрації в Firebase
    const dispatch = useAppDispatch();
    //хук для переадресації
    const navigate = useNavigate();
    //хук для переадресації

    const handleRegister = (event: React.FormEvent<HTMLFormElement>, email: string, password: string) => {
        event.preventDefault();

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
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
    //функція реєстрації в Firebase


    return (
        <form id="RegistrationForm" className="userForm" onSubmit={(event) => handleRegister(event, email, pass)}>
            <p className="title">Quick Registration</p>
            <p className="desription">For new customers</p>
            <div className="error">Invalid email address or password.</div>
            <label>
                <input
                    type="text"
                    placeholder="Full name"
                    data-name="name"
                    // defaultValue="Ivan"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
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
            <label>
                <input
                    type="password"
                    placeholder="Verify Password"
                    data-name="passwordVerify"
                    // defaultValue={123}
                    required
                    value={passVerify}
                    onChange={(e) => setPassVerify(e.target.value)}
                />
            </label>
            <button className="btn">Create Account</button>
        </form>
    );
}

export default RegistrationForm;