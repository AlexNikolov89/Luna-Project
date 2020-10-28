import React from 'react'
import Star from '../../images/svg/star.svg'
import { RestaurantWrapper, TopContainer, RatingContent } from './style'

const Card = () => {
    return (
        <RestaurantWrapper>
                <TopContainer>
                    <p>Restaurant Name</p>
                    <p>Address</p>
                    <RatingContent>
                        <img src={Star} />
                        <img src={Star} />
                        <img src={Star} />
                        <img src={Star} />
                        <img src={Star} />
                        <p>0</p>
                    </RatingContent>
                </TopContainer>
                <image />
            </RestaurantWrapper>
    )
}

export default Card;
