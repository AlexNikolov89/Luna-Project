import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { HeaderContainer, LogoWrapper, RightContainer, HeaderNavigation, Button } from './style'

export const Navbar = () => {
    return (
        <HeaderContainer>
            <LogoWrapper>
                <h2>LUNA</h2>
            </LogoWrapper>
            <RightContainer>
                <BrowserRouter>
                    <HeaderNavigation>
                        <Link to='/'><p>Home</p></Link>
                        <Link to='/search'><p>Search</p></Link>
                        <Link to='/profile'><p>Profile</p></Link>
                    </HeaderNavigation>
                    <Link to='signup'>
                        <Button className='right'>SIGNUP</Button>
                    </Link>
                    <Link to='/Login'>
                        <Button className='left'>LOGIN</Button>
                    </Link>
                </BrowserRouter>
            </RightContainer>
        </HeaderContainer>
    )
}