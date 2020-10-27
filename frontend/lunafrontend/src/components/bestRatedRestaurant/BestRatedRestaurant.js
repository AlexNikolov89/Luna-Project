import React from 'react';
import {BodyContainer, Title,
         HorizontalLine, RestaurantWrapper,
         TopContainer, RatingContent} from './style'
import Star from '../../images/svg/star.svg';


const BestRatedRestaurant = ({restaurant}) => {
    return (
        <BodyContainer>
            <Title>BEST RATED RESTAURANT</Title>
            <HorizontalLine />

            <RestaurantWrapper>
                <TopContainer>
                    <p>Restaurant Name</p>
                    <p>Address</p>
                    <RatingContent>
                        <img src={Star} />
                        <p>0</p>
                    </RatingContent>
                </TopContainer>
            </RestaurantWrapper>
        </BodyContainer>
    )
}

export default BestRatedRestaurant
