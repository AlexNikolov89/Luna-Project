import React from 'react'
import { FooterContainer, SectionUp, SectionDown, LeftSide, RightSide } from './style';
import FacebookIcon from '../../../images/svg/facebook.svg';
import TwieeterIcon from '../../../images/svg/twitter.svg';
import GoogleIcon from '../../../images/svg/googleplus.svg';
import InstagramIcon from '../../../images/svg/instagram.svg';

const FooterNavigation = () => {
    return (
        <FooterContainer>
                <LeftSide>
                    <a href='#'>About Us</a>
                    <a href='#'>Press</a>
                    <a href='#'>Blog</a>
                    <a href='#'>iOS</a>
                    <a href='#'>Android</a>
                </LeftSide>
                <RightSide>
                    <img src={FacebookIcon} />
                    <img src={TwieeterIcon} />
                    <img src={GoogleIcon} />
                    <img src={InstagramIcon} />
                </RightSide>
        </FooterContainer>
    )
}

export default FooterNavigation;
