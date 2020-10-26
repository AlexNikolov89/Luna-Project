import React from 'react'
import {HomepageContainer} from './style'
import Navbar from '../Header/index'
import SearchForm from '../serachRestaurant/SearchRestaurant'
import CopyRightFooter from '../footer/copyRightFooter/CopyRighFooter';
import FooterNavigation from '../footer/footerNavigation/FooterNavigation';
import BestRatedRestaurant from '../bestRatedRestaurant/BestRatedRestaurant';

const Homepage = () => {
    return (
        <HomepageContainer>
            <Navbar />
            <SearchForm />
            <BestRatedRestaurant />
            <FooterNavigation />
            <CopyRightFooter />
        </HomepageContainer>
    )
}

export default Homepage;
