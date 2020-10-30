import React, { Fragment, useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import { Navbar } from '../Header/index';
import { BodyContainer, HorizontalLine, TtitleContent, LinkPages } from './style'
import SearchForm from '../serachForm/SearchForm';
import Card from '../card/Card'
import { Link } from 'react-router-dom'
import { Footer } from '../footer/footer';
import { RestaurantsList } from '../restaurant/RestaurantsList';
import { AllRestaurants } from '../restaurant/AllRestaurants';
import {getAllRestaurantsAction} from '../../store/actions/restaurantAction'


const Restaurants = () => {
    const dispatch = useDispatch();
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await dispatch(getAllRestaurantsAction());
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
                    <Link to='/search' style={{ textDecoration: "none" }}><LinkPages>RESTAURANTS</LinkPages></Link>
                    <Link to='/search/reviews' style={{ textDecoration: "none" }}><LinkPages>REVIEWS</LinkPages></Link>
                    <Link to='/search/users' style={{ textDecoration: "none" }}><LinkPages>USERS</LinkPages></Link>
                </TtitleContent>
                <HorizontalLine />
                <AllRestaurants />
            </BodyContainer>
            <Footer />
        </Fragment>
    )
}

export default Restaurants;
