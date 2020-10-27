import React, {Fragment} from 'react'
import Navbar from '../Header/index';
import CopyRightFooter from '../footer/copyRightFooter/CopyRighFooter'
import FooterNavigation from '../footer/footerNavigation/FooterNavigation';
import { BodyContainer , HorizontalLine, TtitleContent, LinkPages, RestaurantsListing} from './style'
import SearchForm from '../serachForm/SearchForm';
import Card from '../card/Card'
import {Link} from 'react-router-dom'


const Restaurants = () => {
    return (
        <Fragment>
            <Navbar />
            <BodyContainer>
                <SearchForm />
                    <TtitleContent>
                        <Link to='#' style={{ textDecoration: "none" }}><LinkPages>RESTAURANTS</LinkPages></Link>
                        <Link to='/reviews' style={{ textDecoration: "none" }}><LinkPages>REVIEWS</LinkPages></Link>
                        <Link to='/users' style={{ textDecoration: "none" }}><LinkPages>USERS</LinkPages></Link>
                            {/*<HorizontalLine />*/}
                    </TtitleContent>
                    <RestaurantsListing>
                        <Card />
                    </RestaurantsListing>
            </BodyContainer>
            <FooterNavigation />
            <CopyRightFooter />
        </Fragment>
    )
}

export default Restaurants;
