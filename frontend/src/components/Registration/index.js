import React, { useState } from 'react';
import Style from './style';
import { Navbar } from '../Header'
import { Footer } from '../Footer/footer'

export const Registration = () => {
    const [emailRegistration, setEmailRegistration] = useState();
    const [show, setShow] = useState(false)


    const handleEmailRegistration = (e) => {
        setEmailRegistration(e.currentTarget.value);
    }

    const handleRegistration = () => {
        setShow(!show)
    }
    console.log("in my email", emailRegistration)
    return (
        <>
            <Navbar />
            <Style.MainContainerRegistration>
                <Style.ContainerRegistrationForm>
                    {show ?
                        <Style.RegistrationMessage>
                        </Style.RegistrationMessage>
                        : null
                    }
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