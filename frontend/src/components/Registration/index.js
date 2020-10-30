import React, { useState } from 'react';
import Style from './style';
import { Navbar } from '../Header'
import Footer from '../footer/footer';


export const Registration = (props) => {
    const [emailRegistration, setEmailRegistration] = useState("");
    const [show, setShow] = useState(false);

    // console.log(props)

    const handleEmailRegistration = (e) => {
        e.preventDefault();
        setEmailRegistration(e.currentTarget.value);
    }

    const handleRegistration = () => {

        const headers = new Headers({
            "Content-type": "application/json"
        })
        const body = JSON.stringify({ email: emailRegistration })
        console.log("in my body", body);
        const config = {
            method: "POST",
            body: body,
            headers: headers,
        }

        fetch("http://0.0.0.0:8000/backend/api/auth/registration/ ", config)
            .then(response => {
                if (response.ok) {
                    props.history.push("/regmessage");
                    return response.json();
                }
                else throw new Error("Email already taken")
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <>
            <Navbar />
            <Style.MainContainerRegistration>
                <Style.ContainerRegistrationForm>
                    <Style.DivRegistration>
                        <Style.TextRegistration>REGISTRATION</Style.TextRegistration>
                        <Style.Line></Style.Line>
                    </Style.DivRegistration>
                    <Style.DivEmailAddress>
                        <Style.InputEmailRegistration placeholder="E-Mail address" onChange={handleEmailRegistration}></Style.InputEmailRegistration>
                    </Style.DivEmailAddress>
                    <Style.DivButtonRegister>
                        <Style.ButtonRegistration value="register" onClick={handleRegistration}>
                            <Style.TextRegistrationButton>Register</Style.TextRegistrationButton>
                        </Style.ButtonRegistration>
                    </Style.DivButtonRegister>
                </Style.ContainerRegistrationForm>
            </Style.MainContainerRegistration>
            <Footer />
        </>
    )
}