import React from 'react';
import {BodyContainer, Title,
         HorizontalLine, RestaurantOne,
         TopContainer, RatingContent, RestaurantTwo} from './style'
import Star from '../../images/svg/star.svg';


const BestRatedRestaurant = () => {
    return (
        <BodyContainer>
            <Title>BEST RATED RESTAURANT</Title>
            <HorizontalLine />

            <RestaurantOne>
                <TopContainer>
                    <p>Restaurant Name</p>
                    <p>Address</p>
                    <RatingContent>
                        <img src={Star} />
                        <p>0</p>
                    </RatingContent>
                </TopContainer>
            </RestaurantOne>
        </BodyContainer>
    )
}

export default BestRatedRestaurant
