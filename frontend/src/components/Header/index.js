import React from 'react'
import { Link } from 'react-router-dom'
import { MainContainer, LogoWrapper, SinUpButton, SinInButton, ContainerLink, ContainerButton, LinkPages } from './style'

export const Navbar = () => {
    return (
        <MainContainer>
            <LogoWrapper>
                <h2>LUNA</h2>
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