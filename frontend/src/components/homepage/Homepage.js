import React, { useState } from 'react'
import { HomepageContainer, BestRestaurantsContainer } from './style'
import SearchForm from '../serachRestaurant/SearchRestaurant'
import CopyRightFooter from '../footer/copyRightFooter/CopyRighFooter';
import FooterNavigation from '../footer/footerNavigation/FooterNavigation';
import Card from '../card/Card';
import BestRatedRestaurant from '../bestRatedRestaurant/BestRatedRestaurant';
import { Navbar } from '../Header';


const Homepage = () => {

    const [restaurants, setRestaurants] = useState([]);

    return (
        <HomepageContainer>
            <Navbar />
            <SearchForm />
            <BestRatedRestaurant />

            <BestRestaurantsContainer>
                {restaurants.map((restaurant) => (
                    <Card restaurant={restaurant} key={restaurant.id}>{restaurant}</Card>
                ))}
            </BestRestaurantsContainer>

            <FooterNavigation />
            <CopyRightFooter />
        </HomepageContainer>
    )
}

export default Homepage;
