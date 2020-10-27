import styled from 'styled-components';

export const MainVerification = styled.section`
    height:80vh;
    display:flex;
    justify-content:center;
    width:100%;
    background: #F2F2F2;
    border:solid 2px black;
`

export const ContainerVerificationForm = styled.section`
    display:flex;
    flex-direction:column;
    height:100%;
    width:70%;
    border:solid 2px yellow;
`

export const ContentForm = styled.section`
    display:flex;
    height:100%;
    width:100%;
    border:solid 2px blue;
`
export const ContentFormLeftSide = styled.section`
    display:flex;
    justify-content:flex-end;
    height:100%;
    width:50%;
    // margin-right:1%;
    border:solid 2px gray;
`

export const ContainerInputFields = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    height:50%;
    width:61%;
    border:solid 2px green;
`

export const ContentFormRightSide = styled.section`
    display:flex;
    flex-direction:column;
    height:100%;
    width:50%;
    // margin-left:1%;
    border:solid 2px gray;
`

export const DivVerificationText = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    height:10%;
    width:100%;
    margin-top:2%;
    border:solid 2px green;
`
export const TextVerification = styled.h1`
    font-family: Helvetica;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
`

export const Line = styled.line`
    border:3px solid #E47D31;
    width:110px;
    color:black;
`

const InputEmailVerification = styled.input`
    width:380px;
    height:45px;
    // margin-top:3%;
    border: 1px solid #EBEBEB;
    outline:none;
    ::placeholder,
    ::-webkit-input-placeholder {
      font-size:20px;
      font-weight: bold;
    }
`

const InputUserNameVerification = styled.input`
    width:380px;
    height:45px;
    // margin-top:3%;
    border: 1px solid #EBEBEB;
    outline:none;
    ::placeholder,
    ::-webkit-input-placeholder {
      font-size:20px;
      font-weight: bold;
    }
`


const InputUsernameVerification = styled.input`
    width:380px;
    height:45px;
    // margin-top:3%;
    border: 1px solid #EBEBEB;
    outline:none;
    ::placeholder,
    ::-webkit-input-placeholder {
      font-size:20px;
      font-weight: bold;
    }
`

export default {
    MainVerification, DivVerificationText, TextVerification, Line,
    ContainerVerificationForm, ContentForm, ContentFormLeftSide, ContentFormRightSide,
    InputEmailVerification, InputUserNameVerification, InputUsernameVerification, ContainerInputFields
}