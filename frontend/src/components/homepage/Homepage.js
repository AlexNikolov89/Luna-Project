import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {HomepageContainer, BestRestaurantsContainer, Title, HorizontalLine} from './style'
import {Navbar} from '../Header/index'
import SearchForm from '../serachRestaurant/SearchRestaurant'
import Card from '../card/Card';
import {restaurantAction} from '../../store/actions/restaurantAction'



const Homepage = () => {

    const [restaurants, setRestaurants] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const getData = async () => {
            const data = await dispatch(restaurantAction());
            console.log(data);
            setRestaurants(data);
        };
        getData();
    }, []);

    return (
        <HomepageContainer>
            <Navbar />
            <SearchForm />
            <Title>BEST RATED RESTAURANT</Title>
            <HorizontalLine />
            <BestRestaurantsContainer>
               {restaurants && restaurants.map((restaurant) => (
                    <Card restaurant={restaurant} key={restaurant.id}></Card>
               ))}
            </BestRestaurantsContainer>
            {/* <Footer /> */}
        </HomepageContainer>
    )
}


export default Homepage;
