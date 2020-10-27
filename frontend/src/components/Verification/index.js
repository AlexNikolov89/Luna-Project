import React from 'react';
import Style from './style';
import { Navbar } from '../Header';
import { Footer } from '../Footer/footer';

export const Verification = () => {

    return (
        <>
            <Navbar />
            <Style.MainVerification>
                <Style.ContainerVerificationForm>
                    <Style.DivVerificationText>
                        <Style.TextVerification>REGISTRATION</Style.TextVerification>
                        <Style.Line></Style.Line>
                    </Style.DivVerificationText>
                    <Style.ContentForm>
                        <Style.ContentFormLeftSide>
                            <Style.ContainerInputFields>
                                <Style.InputEmailVerification type="email" placeholder="E-Mail address" />
                                <Style.InputUserNameVerification type="text" placeholder="Username" />
                                <Style.InputUsernameVerification type="password" placeholder="Password" />
                            </Style.ContainerInputFields>
                        </Style.ContentFormLeftSide>
                        <Style.ContentFormRightSide></Style.ContentFormRightSide>
                    </Style.ContentForm>
                </Style.ContainerVerificationForm>
            </Style.MainVerification>
            <Footer />
        </>
    )
}