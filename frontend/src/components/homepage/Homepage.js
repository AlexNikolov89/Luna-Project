import React, { useState } from 'react'
import { HomepageContainer, BestRestaurantsContainer } from './style'
import { Navbar } from '../Header'
import SearchForm from '../serachRestaurant/SearchRestaurant'
import Card from '../card/Card';
import BestRatedRestaurant from '../bestRatedRestaurant/BestRatedRestaurant';
// import { Footer } from '../Footer/footer'


const Homepage = () => {

    const [restaurants, setRestaurants] = useState([]);

    // const useEffect = () => {
    //     fetch(`${baseUrl}/backend/api/restaurants/`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //     })
    // }

    return (
        <HomepageContainer>
            <Navbar />
            <SearchForm />
            <BestRatedRestaurant />
            <BestRestaurantsContainer>
                {restaurants.map((restaurant) => (
                    <Card restaurant={restaurant} key={restaurant.id}></Card>
                ))}
            </BestRestaurantsContainer>
            {/* <Footer /> */}
        </HomepageContainer>
    )
}


export default Homepage;
