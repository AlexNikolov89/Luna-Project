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
                            <Style.ContainerInputFieldsLeft>
                                <Style.InputEmailVerification type="email" placeholder="E-Mail address" />
                                <Style.InputUserNameVerification type="text" placeholder="Username" />
                                <Style.InputUsernameVerification type="password" placeholder="Password" />
                            </Style.ContainerInputFieldsLeft>
                        </Style.ContentFormLeftSide>
                        <Style.ContentFormRightSide>
                            <Style.ContainerInputFieldsRight>
                                <Style.InputVerificationCode type="text" placeholder="Validation code" />
                                <Style.InputLocationVerification type="text" placeholder="Location" />
                                <Style.InputPswRepeatVerification type="password" placeholder="Password repeat" />
                            </Style.ContainerInputFieldsRight>
                        </Style.ContentFormRightSide>
                    </Style.ContentForm>
                    <Style.ContentButtonFinishVerification>
                        <Style.ButtonVerificationFinish>Finish Registration</Style.ButtonVerificationFinish>
                    </Style.ContentButtonFinishVerification>
                </Style.ContainerVerificationForm>
            </Style.MainVerification>
            <Footer />
        </>
    )
}