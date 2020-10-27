import styled from 'styled-components';

export const BodyContainer = styled.div `
    height: 639px;
    background: #F2F2F2;
`;

export const Title = styled.p `
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 28px;
text-align: center;
color: #4C4C4C;
margin-top: 30px;
`;

export const HorizontalLine = styled.hr `
border: 3px solid #E47D31;
background: #E47D31;
width: 265px;
`;

export const RestaurantWrapper = styled.div `
    border: 2px solid blue;
    width: 270px;
    height: 410px;
    background: #FFFFFF;
    border-radius: 3px;
    margin-left: 130px;
    margin-top: 42px;
    display-content: center;
    // display: grid;
    // grid-templeate-columns: repeat(270px 1fr),
    // grid-gap: 30px;
`;

export const TopContainer = styled.div `
    height: 126px;
    border-top: 8px solid #E47D31;
`;

export const RatingContent = styled.div `
    border: 2px solid red;
    height: 30px;
    display: flex;
`;



