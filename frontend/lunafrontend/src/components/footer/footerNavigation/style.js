import styled from 'styled-components';

export const FooterContainer = styled.div `
    display: flex;
    height: 56px;
`;

export const LeftSide = styled.div `
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items:center;
    a {
        text-decoration: none;
        display: inline-block;
        justify-content: space-between;
        margin-left: 75px;
        color: #646363;
    }
`

export const RightSide = styled.div `
    align-items: center;
    margin-right: 30px;
    display: flex;
    justify-content: center;
    margin-left: 530px;
    img {
        margin-right: 27px;
        display: flex;
        justify-content: center;
        height: 40px;
    }
    
`

