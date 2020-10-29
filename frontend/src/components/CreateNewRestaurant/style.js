import styled from 'styled-components';

const MainContainerFormNewRestaurant = styled.section`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width:100%;
    height:80vh;
    border:solid 2px red;
`


export const DivCreateNewRestaurantText = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    height:10%;
    width:100%;
    margin-top:2%;
    border:solid 2px green;
`

export const TextCreateNewRestaurant = styled.h1`
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

export const ContainerFormCreateNewRestaurant = styled.section`
    display:flex;
    justify-content:center;
    height:100%;
    width:100%;
    border:solid 2px yellow;
`

export const ContainerFormLeftSide = styled.div`
    display:flex;
    justify-content:flex-end;
    height:100%;
    width:25%;
    border:2px solid blue;

`

export const ContainerFormCenter = styled.div`
    display:flex;
    justify-content:center;
    height:100%;
    width:25%;
    border:2px solid black;
`

export const ContainerFormRight = styled.div`
    dispaly:flex;
    height:100%;
    width:25%;
    border:2px solid green;
`

export const FormLeftSide = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    height:85%;
    width:auto;
    border:solid 2px red;
`

export const FormCenter = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-evenly;
    height:85%;
    width:auto;
    border:solid 2px red;
`

export const FormRightSide = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-evenly;
    height:85%;
    width:80%;
    border:solid 2px red;
`

export const InputFieldName = styled.input`
    width:350px;
    height:40px;
    border-radius:3px;
`

export const InputFieldAddress = styled.input`
    width:350px;
    height:40px;
    border-radius:3px;
`

export const InputFieldContact = styled.input`  
    width:350px;
    height:40px;
    border-radius:3px;
`

export const InputFieldDetails = styled.input`
    width:350px;
    height:40px;
    border-radius:3px;
`


export const InputFieldCategory = styled.input`
    width:350px;
    height:40px;
    border-radius:3px;
`

export const InputFieldCity = styled.input`
    width:350px;
    height:40px;
    border-radius:3px;
`

export const InputFieldPhone = styled.input`
    width:350px;
    height:40px;
    border-radius:3px;
`

export const InputFieldPriceLevel = styled.select`
    width:350px;
    height:40px;
    border-radius:3px;
`
export const LevelPrice = styled.option`
    
`

export const InputFieldCounty = styled.select`
    width:350px;
    height:40px;
    border-radius:3px;
`

export const City = styled.option`
    
`

export const RestaurantImage = styled.input`

`

export default {
    MainContainerFormNewRestaurant, DivCreateNewRestaurantText,
    TextCreateNewRestaurant, Line, ContainerFormCreateNewRestaurant,
    ContainerFormLeftSide, ContainerFormCenter, ContainerFormRight,
    FormLeftSide, FormCenter, FormRightSide, InputFieldName, InputFieldAddress,
    InputFieldContact, InputFieldDetails, InputFieldCategory, InputFieldCity,
    InputFieldPhone, InputFieldPriceLevel, LevelPrice, InputFieldCounty, City,
    RestaurantImage,
}
