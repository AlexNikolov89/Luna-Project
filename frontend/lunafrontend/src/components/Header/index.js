import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { MainContainer, LogoWrapper, SinUpButton, SinInButton, ContainerLink, ContainerButton, LinkPages } from './style'

const Navbar = () => {

    return (
        <MainContainer>
            <LogoWrapper>
                <h2>LUNA</h2>
            </LogoWrapper>

            <ContainerLink>
                <Link style={{ textDecoration: "none" }} to='/'><LinkPages>Home</LinkPages></Link>
                <Link style={{ textDecoration: "none" }} to='/search'><LinkPages>Search</LinkPages></Link>
                <Link style={{ textDecoration: "none" }} to='/profile'><LinkPages>Profile</LinkPages></Link>
            </ContainerLink>
            <ContainerButton>
                <Link to='signup'>
                    <SinUpButton>SIGNUP</SinUpButton>
                </Link>
                <Link to='/'>
                    <SinInButton >LOGIN</SinInButton>
                </Link>
            </ContainerButton>
        </MainContainer>

    )
}

export default Navbar;