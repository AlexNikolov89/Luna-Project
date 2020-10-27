import styled from 'styled-components';

export const FormWrapper = styled.div `
    width: 100%;
    background: #FFFFFF;
    height: 50px;
    display: inline-flex;
    border: 3px solid red;
`;

export const SearchBox = styled.div `
    width: 100%;

    input[type='text'] {
        width: 1150px;
        border: 1px solid #D8D8D8;
        height: 50px;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 23px;
        justify-content: center;
        color: #D8D8D8;
        padding-left: 30px;
}
`

export const Button = styled.button `
    width: 300px;
    height: 50px;
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
