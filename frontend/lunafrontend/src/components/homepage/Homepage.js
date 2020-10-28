import React, {useState, useEffect} from 'react'
import {HomepageContainer, BestRestaurantsContainer} from './style'
import Navbar from '../Header/index'
import SearchForm from '../serachRestaurant/SearchRestaurant'
import CopyRightFooter from '../footer/copyRightFooter/CopyRighFooter';
import FooterNavigation from '../footer/footerNavigation/FooterNavigation';
import Card from '../card/Card';
import BestRatedRestaurant from '../bestRatedRestaurant/BestRatedRestaurant'
import {baseUrl} from '../../helpers/baseUrl'

const Homepage = () => {

    const [restaurants, setRestaurants] = useState([]);

    // useEffect(() => {
    //     fetch(`${baseUrl}/api/restaurants`);
    //         .then (res => )
    // }[]) 

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
