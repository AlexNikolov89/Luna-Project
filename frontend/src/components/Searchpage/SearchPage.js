import React, { Fragment, useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import { Navbar } from '../Header/index';
import { BodyContainer, WrappedBody, HorizontalLine, TtitleContent, LinkPages, RestaurantsListing } from './style'
import SearchForm from '../serachForm/SearchForm';
import Card from '../card/Card'
import { Link } from 'react-router-dom'
import { Footer } from '../footer/footer';
import {restaurantAction} from '../../store/actions/restaurantAction';


const Restaurants = () => {
    const dispatch = useDispatch();
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await dispatch(restaurantAction());
            console.log(data);
            setRestaurants(data);
        };
        getData();
    })

    return (
        <Fragment>
            <Navbar />
            <SearchForm />
            <BodyContainer>
                <TtitleContent>
                    <Link to='/' style={{ textDecoration: "none" }}><LinkPages>RESTAURANTS</LinkPages></Link>
                    <Link to='/search/reviews' style={{ textDecoration: "none" }}><LinkPages>REVIEWS</LinkPages></Link>
                    <Link to='/search/users' style={{ textDecoration: "none" }}><LinkPages>USERS</LinkPages></Link>
                </TtitleContent>
                <HorizontalLine />
                <RestaurantsListing>
                    {restaurants.map((restaurant) => {
                        <Card restaurant={restaurant} key={restaurant.id} />
                    })}
                </RestaurantsListing>
            </BodyContainer>
            <Footer />
        </Fragment>
    )
}

export default Restaurants;
