import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

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
    const [password, setPassword] = useState('');
    const [passwordVerify, setPasswordVerify] = useState('');
    const [nameDirty, setNameDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [passwordVerifyDirty, setPasswordVerifyDirty] = useState(false);
    const [nameError, setNameError] = useState('Field name Cannot be empty');
    const [emailError, setEmailError] = useState('Field email Cannot be empty');
    const [passwordError, setPasswordError] = useState('Field password Cannot be empty');
    const [passwordVerifyError, setPasswordVerifyError] = useState('Passwords do not match');

    
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if(nameError || emailError || passwordError || passwordVerifyError){
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [nameError, emailError, passwordError, passwordVerifyError])


    const blurHandler = (e: any) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true);
                break
            case 'email':
                setEmailDirty(true);
                break
            case 'password':
                setPasswordDirty(true);
                break
            case 'passwordVerify':
                setPasswordVerifyDirty(true);
                break
        }
    }

    const nameHandler = (e: any) => {
        setName(e.target.value)
        if (e.target.value) {
            if (e.target.value.length < 2 || e.target.value.length > 30) {
                setNameError('Password name be longer than 2 and shorter than 30 characters');

            } else {
                setNameError("");
            }
        } else {
            setNameError('Field name Cannot be empty');
        }
    }

    const emailHandler = (e: any) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (e.target.value) {
            if (!re.test(String(email).toLowerCase())) {
                setEmailError('Invalid email');
            } else {
                setEmailError("");
            }
        } else {
            setEmailError('Field email Cannot be empty');
        }
    }

    const passwordHandler = (e: any) => {
        setPassword(e.target.value)

        if (e.target.value) {
            if (e.target.value.length < 6 || e.target.value.length > 15) {
                setPasswordError('Password must be longer than 6 and shorter than 15 characters');

            } else {
                setPasswordError("");
            }
        } else {
            setPasswordError('Field password Cannot be empty');
        }
    }

    const passwordVerifyHandler = (e: any) => {

        setPasswordVerify(e.target.value)

        if (password === e.target.value) {
            setPasswordVerifyError("");
        } else{
            setPasswordVerifyError("Passwords do not match");
        }
    }

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
                // console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
                navigate('/');
            })
            .catch((error) => {
                switch (error.code) {
                    case "auth/email-already-in-use":
                        setEmailError('A user with this email already exists');
                        break;
                    default:
                        setEmailError(error.code);
                }
                // console.log(error);
                // console.log(error.code);
                // console.log(error.message);
            });
    }
    //функція реєстрації в Firebase


    return (
        <form id="RegistrationForm" className="userForm" onSubmit={(event) => handleRegister(event, email, password)}>
            <p className="title">Quick Registration</p>
            <p className="desription">For new customers</p>
            {(nameDirty && nameError) && <div className="error">{nameError}</div>}
            <label>
                <input
                    type="text"
                    placeholder="Full name"
                    name="name"
                    required
                    value={name}
                    onChange={(e) => nameHandler(e)}
                    onBlur={(e) => blurHandler(e)}
                />
            </label>
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
            {(passwordVerifyDirty && passwordVerifyError) && <div className="error">{passwordVerifyError}</div>}
            <label>
                <input
                    type="password"
                    placeholder="Verify Password"
                    name="passwordVerify"
                    required
                    value={passwordVerify}
                    onChange={(e) => passwordVerifyHandler(e)}
                    onBlur={(e) => blurHandler(e)}
                />
            </label>
            <button disabled={!formValid} className="btn">Create Account</button>
        </form>
    );
}

export default RegistrationForm;