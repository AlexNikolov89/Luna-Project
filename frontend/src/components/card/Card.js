import React from 'react'
import Star from '../../images/svg/star.svg'
import { RestaurantWrapper, TopContainer, RatingContent } from './style'

const Card = ({restaurant}) => {
    // if (props.restaurant === undefined) return null
    return (
        <RestaurantWrapper>
            <TopContainer>
                <p>{restaurant.name}</p>
                <p>{restaurant.street}</p>
                <RatingContent>
                    <img src={Star} />
                    <img src={Star} />
                    <img src={Star} />
                    <img src={Star} />
                    <img src={Star} />
                    <p>0</p>
                </RatingContent>
            </TopContainer>
            <image>{restaurant.image}</image>
        </RestaurantWrapper>
    )
}

export default Card;
