import React from 'react'
import {HomepageContainer} from './style'
import Header from '../header/Header'
import SearchForm from '../serachRestaurant/SearchRestaurant'
import Footer from '../footer/Footer';

const Homepage = () => {
    return (
        <HomepageContainer>
            <Header />
            <SearchForm />
            <section>
            
            </section>
            <Footer />
        </HomepageContainer>
    )
}

export default Homepage;
