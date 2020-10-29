import React from 'react'
import { Link } from 'react-router-dom'
import { MainContainer, LogoWrapper, SinUpButton, SinInButton, ContainerLink, ContainerButton, LinkPages, LogoLuna } from './style'
import LOGO from '../../images/svg/logo.svg'

export const Navbar = () => {
    return (
        <MainContainer>
            <LogoWrapper>
                <LogoLuna src={LOGO}></LogoLuna>
            </LogoWrapper>

            <ContainerLink>
                <Link to='/' style={{ textDecoration: "none" }} ><LinkPages>Home</LinkPages></Link>
                <Link to='/search' style={{ textDecoration: "none" }} ><LinkPages>Search</LinkPages></Link>
                <Link to='profile' style={{ textDecoration: "none" }} ><LinkPages>Profile</LinkPages></Link>
            </ContainerLink>
            <ContainerButton>
                <Link to='/registration'>
                    <SinUpButton >SIGNUP</SinUpButton>
                </Link>
                <Link to='/'>
                    <SinInButton >LOGIN</SinInButton>
                </Link>
            </ContainerButton>
        </MainContainer>

    )
}