import React from 'react';
import Style from './style';
import { Navbar } from '../Header'

export const Registration = () => {

    return (
        <>
            <Navbar />
            <Style.TextRegistration>REGISTRATION</Style.TextRegistration>
            <Style.InputEmailRegistration placeholder="E-Mail address"></Style.InputEmailRegistration>
            <Style.ButtonRegistration value="register">
                <Style.TextRegistrationButton>Register</Style.TextRegistrationButton>
            </Style.ButtonRegistration>
        </>
    )
}