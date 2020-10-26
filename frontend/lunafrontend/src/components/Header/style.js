import styled from 'styled-components';

export const MainContainer = styled.div`
    background: #FFFFFF;
    display:flex;
    align-items: center;
    width: 100%;
    height: 71px;
`

export const LogoWrapper = styled.div`
   float: left;
   h2 {
       margin-left: 30px;
       justify-content: center;
    //    margin-top: 13px;
       font-size: 36px;
        line-height: 42px;
        font-family: BradleyHandITCTT;
   }
`

// export const HeaderNavigation = styled.div`
//     display: inline-block;
//     margin-right: 62px;
//     border:solid 2px red;
// `


export const SinUpButton = styled.button`
    background: #E47D31;
    height: 41px;
    width: 90px;
    color: white;
    margin-right:1px;
    border: none;
    border-radius:20px 0px 0px 20px; 
    cursor: pointer;
    
`
export const SinInButton = styled.button`
    background: #E47D31;
    height: 41px;
    width: 90px;
    color: white;
    border-radius:0px 20px 20px 0px; 
    border: none;
    cursor: pointer;
    
`

export const ContainerLink = styled.div`
    display:flex;
    justify-content: space-evenly;
    align-items:center;
    height:100%;
    width:35%;
    margin-left:50%;
    //margin-right: 62px;

`

export const LinkPages = styled.p`
    text-decoration: none;
`


export const ContainerButton = styled.div`
    display:flex;
    align-items:center;
    height:100%;
    width:10%;
    margin-right: 30px;
`

// export const RightContainer = styled.div`
//     float: right;
//    width:50%;
//    margin-top: 21px;
//    text-decoration: none;
//     display: inline-block;
//     margin-right: 62px;
//     border: 2px solid red;

//     p {
//         display: inline-block;
//         margin-right: 62px; 
//         color: #4A4A4A;
//         font-style: normal;
//         font-weight: normal;
//         font-size: 20px;
//         line-height: 23px;
//         font-family: Helvetica
//     }
//     p:hover {
//         font-weight: bold;
//         padding-bottom: 13px;
//         border-bottom: 2px solid #E47D31;
//     }

// `

export const ContainerButtonLoginSignup = styled.div`

    height:100%;
    width:2%;
`