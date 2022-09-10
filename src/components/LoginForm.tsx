import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

//імпорт для Firebase + Redux-Toolkit
import { useAppDispatch } from '../hooks/redux-hooks';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from '../store/slice/userSlice';
//імпорт для Firebase + Redux-Toolkit

//Для переадресації після вдалого логіну
import { useNavigate } from 'react-router-dom';
//Для переадресації після вдалого логіну

function LoginForm(props: any) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('Field email Cannot be empty');
    const [passwordError, setPasswordError] = useState('Field password Cannot be empty');

    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, passwordError])

    const blurHandler = (e: any) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true);
                break
            case 'password':
                setPasswordDirty(true);
                break
        }
    }

    const emailHandler = (e: any) => {
        setEmail(e.target.value)
        // const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        // if (e.target.value) {
        //     if (!re.test(String(email).toLowerCase())) {
        //         setEmailError('Invalid email');
        //     } else {
        //         setEmailError("");
        //     }
        // } else {
        //     setEmailError('Field email Cannot be empty');
        // }
        if (e.target.value) {
            setEmailError("");
        } else {
            setEmailError('Field email Cannot be empty');
        }
    }

    const passwordHandler = (e: any) => {
        setPassword(e.target.value)

        if (e.target.value) {
            //     if (e.target.value.length < 6 || e.target.value.length > 15) {
            //         setPasswordError('Password must be longer than 6 and shorter than 15 characters');

            //     } else {
            //         setPasswordError("");
            //     }
            // } else {
            //     setPasswordError('Field password Cannot be empty');
            // }
            if (e.target.value) {
                setPasswordError("");
            } else {
                setPasswordError('Field password Cannot be empty');
            }
        }
    }

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
                // console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
                navigate('/');
            })
            .catch((error) => {
                if (error.code === "auth/wrong-password") {
                    setPasswordError('Incorrect password');
                } else if (error.code === "auth/user-not-found") {
                    setEmailError('The user with this email does not exist');
                } else {
                    setEmailError(error.code);
                }
                // console.log(error);
                // console.log(error.code);
                // console.log(error.message);
            });
    }
    //функція логіну в Firebase


    return (
        <form id="LoginForm" className="userForm" onSubmit={(event) => handleLogin(event, email, password)}>
            <p className="title">Secure Sign In</p>
            <p className="desription">For current customers</p>
            {(emailDirty && emailError) && <div className="error">{emailError}</div>}
            <label>
                <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => emailHandler(e)}
                    onBlur={(e) => blurHandler(e)}
                />
            </label>
            {(passwordDirty && passwordError) && <div className="error">{passwordError}</div>}
            <label>
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                    value={password}
                    onChange={(e) => passwordHandler(e)}
                    onBlur={(e) => blurHandler(e)}
                />
            </label>
            <button disabled={!formValid} className="btn">Sign in</button>
        </form>
    );
}

export default LoginForm;