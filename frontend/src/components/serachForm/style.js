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
border: 1px solid #D8D8D8;
    margin-top: 27px;
    width: 100%;
    background: white;

    p {
        font-weight: bold;
        font-size: 20px;
        line-height: 23px;
        justify-content: center;
        color: #D8D8D8;

    }

    p:hover {
        text-decoration:underline;
        color: black;
    }
`;

export const ButtonCreateRestaurant = styled.div `
    width: 60px;
    border: 1px solid #D8D8D8;
    height: 52px;

    p {
        display: flex;
    justify-content: center;
    font-size: 20px;
    }
`