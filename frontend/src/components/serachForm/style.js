import styled from 'styled-components';

export const FormWrapper = styled.div `
    width: 100%;
    background: #FFFFFF;
    height: 50px;
    display: inline-flex;
`;


export const Input = styled.input `
height: 48px;
width: 80%;
border: 1px solid #D8D8D8;
height: 50px;
font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 23px;
        justify-content: center;
        color: #D8D8D8;
        padding-left: 30px;
`;

export const Button = styled.button `
    width: 300px;
    height: 54px;
    border: 1px solid #D8D8D8;
    background: #FFFFFF;

    span {
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
        color: #D8D8D8;
    }

    
`

export const Dropdown = styled.div `
    margin-top: 30px;
    background: white;
    width: 100%;
    p {

        color: black;
        transition: linear 0.10s;
        display: block;
    }
   
`;

export const ButtonNew = styled.div `
width: 50px;
height: 52px;
border: 1px solid #D8D8D8;
background: #FFFFFF;
display: flex;
justify-content: center;
font-size: bold;

&:hover {
    cursor: pointer;
}
`
