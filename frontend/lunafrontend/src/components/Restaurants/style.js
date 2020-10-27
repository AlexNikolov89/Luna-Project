import styled from 'styled-components';



export const BodyContainer = styled.div `
    width: 100%;
    height: 820px;
` ;

export const RestaurantsListing = styled.div `
margin-top: 70px;
display: grid
grid-template-columns: repeat(4, 1fr);
grid-gap: 30px;
border: 1px solid red;
`


export const HorizontalLine = styled.hr `
border: 1px solid #D8D8D8;
background: #D8D8D8;
width: 630px;
`;

export const TtitleContent = styled.div `
    display: flex;
    justify-content: space-evenly;
    text-decoration: none;
    margin-top: 30px;
    
`;

export const LinkPages = styled.a `
font-weight: bold;
font-size: 24px;
line-height: 28px;
text-align: center;
color: #4C4C4C;


&:hover {
    font-weight: bold;
    padding-bottom: 13px;
    border-bottom: 3px solid #E47D31;
   }

`

