import React, {Fragment, useEffect, useState} from 'react'
import {Navbar} from '../Header/index'
import CopyRightFooter from '../Footer/copyRightFooter/CopyRighFooter'
import FooterNavigation from '../Footer/footerNavigation/FooterNavigation'
import SearchForm from '../serachForm/SearchForm'
import {ReviewsContainer, HorizontalLine, BodyContainer, ReviewCardWrapper, ButtonLike, ButtonComment} from './style'
import {TtitleContent, LinkPages, TopContainer, ReviewContent, Image, LikeCommentButton, CommentsArea, CommentsInfo} from './style'
import {Link} from 'react-router-dom';
import {useDispatch } from 'react-redux'
import {reviewAction} from '../../store/actions/reviewsAction'
import ReviewCard from '../reviewCard/ReviewCard'

const ReviewsPage = () => {

    const [reviwes, setReviews] = useState([]);
    const dispatch = useDispatch(); 

    useEffect(() => {
        const getData = async () => {
            const data = await dispatch(reviewAction());
            console.log(data);
            setReviews(data);
        };
        getData();
    }, []);


    return (
        <Fragment>
            <Navbar />
                <SearchForm />
                <BodyContainer>
                    <TtitleContent>
                        <Link to='/search/restaurants' style={{ textDecoration: "none" }}><LinkPages>RESTAURANTS</LinkPages></Link>
                        <Link to='/' style={{ textDecoration: "none" }}><LinkPages>REVIEWS</LinkPages></Link>
                        <Link to='/search/users' style={{ textDecoration: "none" }}><LinkPages>USERS</LinkPages></Link>
                    </TtitleContent>
                    <HorizontalLine />
                    <ReviewsContainer>
                    {reviwes && reviwes.map((review) => {
                        <ReviewCard review={review} key={review.id} /> 
                    })}

                </ReviewsContainer>
            </BodyContainer>
            <Footer />
        </Fragment>
    )
}

export default ReviewsPage;
