import React, {Fragment, useState, useEffect} from 'react'
import {Navbar} from '../Header/index'
import {Footer} from '../footer/footer.js'
import SearchForm from '../serachForm/SearchForm';
import {Link} from 'react-router-dom'
import {TtitleContent, CommentWrapper, Text, Image, TopContainer, LinkPages, BodyContainer, HorizontalLine, UsersComments } from './style'
import UsersCard from '../usersCard/UsersCard';
import {useDispatch} from 'react-redux'


const UsersPage = () => {


    

    return (
        <Fragment>
            <Navbar />
            <SearchForm />
            <BodyContainer>
                <TtitleContent>
                    <Link to='/search/restaurants' style={{ textDecoration: "none" }}><LinkPages>RESTAURANTS</LinkPages></Link>
                    <Link to='/search/reviews' style={{ textDecoration: "none" }}><LinkPages>REVIEWS</LinkPages></Link>
                    <Link to='/' style={{ textDecoration: "none" }}><LinkPages>USERS</LinkPages></Link>
                </TtitleContent>
                <HorizontalLine />
                <UsersComments>
                    <CommentWrapper>
                        <UsersCard />
                    </CommentWrapper>
                </UsersComments>
            </BodyContainer>
            <Footer />
        </Fragment>
    )
}

export default UsersPage;
