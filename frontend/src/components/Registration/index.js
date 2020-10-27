import React, { useState } from 'react';
import Style from './style';
import { Navbar } from '../Header'
import { Footer } from '../Footer/footer'
import { MessageRegistration } from '../MessageRegistration';
import { Link } from 'react-router-dom';


export const Registration = () => {
    const [emailRegistration, setEmailRegistration] = useState("");
    const [show, setShow] = useState(false)


    const handleEmailRegistration = (e) => {
        e.preventDefault();
        setEmailRegistration(e.currentTarget.value);
    }

    const handleRegistration = () => {

        const headers = new Headers({
            "Content-type": "application/json"
        })
        const body = JSON.stringify(emailRegistration)
        const config = {
            method: "POST",
            body: body,
            header: headers,
        }

        fetch("http://0.0.0.0:8000/backend/api/auth/registration/ ", config)
            // .then(response => response.json())
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else throw new Error("Email non valid");
            })
            .then(data => {
                console.log("in my respone", data)
            })
            .catch(error => {
                console.log(error);
            })
    }
    // console.log("in my email", emailRegistration)
    return (
        <>
            <Navbar />
            <Style.MainContainerRegistration>
                <Style.ContainerRegistrationForm>
                    {/* {show ?
                        <Style.RegistrationMessage>
                            <p>
                                Thanks for your registration. Our hard working monkeys are preparing a digital message called E-Mail that will be sent to you soon. Since monkeys arent good in writing the message could end up in you junk folder. Our apologies for any inconvienience.thank for
                            </p>
                        </Style.RegistrationMessage>
                        : null
                    } */}
                    <Style.DivRegistration>
                        <Style.TextRegistration>REGISTRATION</Style.TextRegistration>
                        <Style.Line></Style.Line>
                    </Style.DivRegistration>
                    <Style.DivEmailAddress>
                        <Style.InputEmailRegistration placeholder="E-Mail address" onChange={handleEmailRegistration}></Style.InputEmailRegistration>
                    </Style.DivEmailAddress>
                    <Style.DivButtonRegister>
                        <Link to="/messageReg"><Style.ButtonRegistration value="register" onClick={handleRegistration}>
                            <Style.TextRegistrationButton>Register</Style.TextRegistrationButton>
                        </Style.ButtonRegistration></Link>
                    </Style.DivButtonRegister>
                </Style.ContainerRegistrationForm>
            </Style.MainContainerRegistration>
            <Footer />
        </>
    )
}