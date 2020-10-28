import React, {Fragment} from 'react'
import Navbar from '../Header/index'
import CopyRightFooter from '../footer/copyRightFooter/CopyRighFooter'
import FooterNavigation from '../footer/footerNavigation/FooterNavigation'
import SearchForm from '../serachForm/SearchForm'
import CopyRighFooter from '../footer/copyRightFooter/CopyRighFooter'
import {ReviewsContainer, HorizontalLine, BodyContainer} from './style'
import {TtitleContent, LinkPages} from './style'
import {Link} from 'react-router-dom';

const ReviewsPage = () => {
    return (
        <Fragment>
            <Navbar />
                <SearchForm />
                <BodyContainer>
                    <TtitleContent>
                        <Link to='/restaurants' style={{ textDecoration: "none" }}><LinkPages>RESTAURANTS</LinkPages></Link>
                        <Link to='/' style={{ textDecoration: "none" }}><LinkPages>REVIEWS</LinkPages></Link>
                        <Link to='/users' style={{ textDecoration: "none" }}><LinkPages>USERS</LinkPages></Link>
                    </TtitleContent>
                    <HorizontalLine />
                    <ReviewsContainer>

                    </ReviewsContainer>
            </BodyContainer>
            <FooterNavigation />
            <CopyRighFooter />
        </Fragment>
    )
}

export default ReviewsPage;
