import React, {Fragment} from 'react'
import {TopContainer, Image, Text} from './style'

const UsersCard = () => {
    return (
                 <Fragment>
                        <TopContainer>
                            <Image>IMG</Image>
                            <h4>Name and Surname</h4>
                            <p>Reviews in total</p>
                        </TopContainer>
                        <Text>
                            <p>Comment Text...</p>
                        </Text>
                    </Fragment>
    )
}

export  default UsersCard;
