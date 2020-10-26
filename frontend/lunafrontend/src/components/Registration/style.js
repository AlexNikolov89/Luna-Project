import styled from 'styled-components'

export const TextRegistration = styled.h1`
    font-family: Helvetica;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
`

export const ButtonRegistration = styled.button`
    height:56px;
    width:190px;
    border-radius:28px;
    background-color: #E47D31;
    outline:none;
    border:transparent;
    cursor:pointer;
    &:hover{
        // background-color: red;
    }
`

export const TextRegistrationButton = styled.text`
    font-size: 20px;
    color:white;
`

export const InputEmailRegistration = styled.input`
    width:300px;
    height:45px;
    border: 1px solid #EBEBEB;
    ::placeholder,
    ::-webkit-input-placeholder {
      font-size:20px;
      font-weight: bold;
    }
`


export default {
    TextRegistration, ButtonRegistration, TextRegistrationButton,
    InputEmailRegistration, InputEmailRegistration
}