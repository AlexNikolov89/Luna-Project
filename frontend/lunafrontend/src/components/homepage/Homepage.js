import React, {useState} from 'react'
import {HomepageContainer, BestRestaurantsContainer} from './style'
import Navbar from '../Header/index'
import SearchForm from '../serachRestaurant/SearchRestaurant'
import CopyRightFooter from '../footer/copyRightFooter/CopyRighFooter';
import FooterNavigation from '../footer/footerNavigation/FooterNavigation';
import BestRatedRestaurant from '../bestRatedRestaurant/BestRatedRestaurant';

const Homepage = () => {

    const [restaurants, setRestaurants] = useState([]);

    return (
        <HomepageContainer>
            <Navbar />
            <SearchForm />
            <BestRatedRestaurant />

            <BestRestaurantsContainer>
                {restaurants.map((restaurant) => (
                    <BestRatedRestaurant restaurant={restaurant} key={restaurant.id}>{restaurant}</BestRatedRestaurant>
                ))}
            </BestRestaurantsContainer>

            <FooterNavigation />
            <CopyRightFooter />
        </HomepageContainer>
    )
}

export default Homepage;
