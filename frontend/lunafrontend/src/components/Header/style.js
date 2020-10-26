import styled from 'styled-components';

export const HeaderContainer = styled.div`
    background: #FFFFFF;
    width: 100%;
    height: 71px;
`

export const LogoWrapper = styled.div`
   float: left;
   h2 {
       margin-left: 30px;
       justify-content: center;
       margin-top: 13px;
       font-size: 36px;
        line-height: 42px;
        font-family: BradleyHandITCTT;
   }
`

export const HeaderNavigation = styled.div`
display: inline-block;
margin-right: 62px;
`


export const Button = styled.button`
    background: #E47D31;
    height: 41px;
    width: 200px;
    color: white;
    border: none;
    cursor: pointer;
`

export const RightContainer = styled.div`
   float: right;
   margin-top: 21px;
   text-decoration: none;
    display: inline-block;
    margin-right: 62px;

    p {
        display: inline-block;
        margin-right: 62px; 
        color: #4A4A4A;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
        font-family: Helvetica
    }
    p:hover {
        font-weight: bold;
        padding-bottom: 13px;
        border-bottom: 2px solid #E47D31;
    }

`

