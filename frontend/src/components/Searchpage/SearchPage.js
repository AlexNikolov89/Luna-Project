import React, {Fragment, useState, useEffect} from 'react'
import {Navbar} from '../Header/index';
import CopyRightFooter from '../Footer/copyRightFooter/CopyRighFooter'
import FooterNavigation from '../Footer/footerNavigation/FooterNavigation';
import { BodyContainer , WrappedBody, HorizontalLine, TtitleContent, LinkPages, RestaurantsListing} from './style'
import SearchForm from '../serachForm/SearchForm';
import Card from '../card/Card'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {restaurantAction} from '../../store/actions/restaurantAction'


const Restaurants = () => {

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
                        {restaurants && restaurants.map((restaurant) => (
                             <Card restaurant={restaurant} key={restaurant.id}></Card>
                         ))}
                    </RestaurantsListing>
            </BodyContainer>
            <Footer />
        </Fragment>
    )
}

export default Restaurants;
