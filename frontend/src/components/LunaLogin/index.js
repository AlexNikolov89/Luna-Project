import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import Style from './style';
import { Navbar } from '../Header';
import { Footer } from '../Footer/footer';


export const Login = () => {
    // const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailOnChangeHandler = (e) => {
        setEmail(e.currentTarget.value);
    }

    const passwordOnChangeHandler = (e) => {
        setPassword(e.currentTarget.value);
    }

    const loginHandler = () => {
        const headers = new Headers({
            "Content-type": "application/json"
        })
        const body = JSON.stringify(email, password);
        const config = {
            method: "POST",
            body: body,
            headers: headers,
        }

        fetch("", config)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error("found error in the login flow")
                }
            })
            .then(data => {
                if (data.access) {
                    const token = token.access;
                    this.props.history.push("/test")
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <>
            <Navbar />
            <Style.ContainerLogin>
                <Style.LabelEmail>Email<input type="text" onChange={emailOnChangeHandler} /></Style.LabelEmail>
                <Style.LabelPassword>Password<input type="password" onChange={passwordOnChangeHandler} /></Style.LabelPassword>
                <Style.ButtonLogin value="Login" onClick={loginHandler}>Login</Style.ButtonLogin>
            </Style.ContainerLogin>
            <Footer />
        </>


    )

}