import styled from 'styled-components'
import { Navbar } from '../Header'
import Footer from '../Footer/footer.js';
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import ProfileBackground from '../../images/profile-background.jpeg'
import { getMyProfileAction } from '../../store/actions/profileAction';
import Star from '../../images/svg/star.svg'
import Comment from '../../images/svg/comment.svg'
import Edit from '../../images/svg/edit.svg'
import Restaurant from '../../images/svg/restaurant.svg'
import { Button } from '../serachRestaurant/style';

const MainContainer = styled.section`
    display:flex;
    flex-direction: column;
    align-items: center;
    background: #F2F2F2;
    height:80vh;
    width:100%;
    . background {
        position:absolute;
        top:0;
        left:0;
    }
`

const Background = styled.section`
    flex: 0 0 155px;
    background-image: url(${ProfileBackground});
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.6;
    background-repeat: no-repeat;
    background-size: cover;
    height: 351px;
    width: 100%;
`

const ContentsContainer = styled.div`
    flex: 1 1 auto;
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 70%;
`

const ProfileContainer = styled.div`
    display:flex;
    width: 10%;
    flex-direction: column;
    font-size: 20px;
    color: white;
    .name {
        font-size: 25px;
        font-weight: 700;
    }
`

const Reviews = styled.div`
    display:flex;
    flex-direction: column;
    font-size: 20px;
`

const Profile = (props) => {
    return (
        <>
            <ProfileContainer>
                <div className="name">{props.profile.first_name} {props.profile.last_name.charAt(0).toUpperCase()}.</div>
                <div>{props.profile.location}</div>
                <div>{props.profile.reviews.length} reviews</div>
                <div>{props.profile.comments.length} comments</div>
            </ProfileContainer>
        </>
    );
};

const FirstColumn = styled.div` 
    flex: 0 0 30%;
    height:60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .image_container {
        width: 200px;
        height: 200px;

        img {
            width: 100%;
            height: 100%;
        }
    }
    .icon_container {
        display: flex;
        img {
            padding: 0 5px;
        }
    }
`

const SecondColumn = styled.div`  
    flex: 0 1 auto;
    height:100%;
`

const ThirdColumn = styled.div`  
    flex: 0 0 30%;
    height:100%;
`

export function UserProfile(props) {
    const profile = useSelector((state) => state.profile);
    const profileIsEmpty = profile.username == undefined;
    const dispatch = useDispatch();
    useEffect(() => {
        if (profileIsEmpty) {
            dispatch(getMyProfileAction);
        }
    }, []);

    return (
        <>
            <Navbar />
            <MainContainer>
                <Background>
                    {profileIsEmpty && <p>Loading my profile...</p>}
                    {!profileIsEmpty && <Profile profile={profile} />}
                </Background>
                <ContentsContainer>
                    <FirstColumn>
                        <div className="image_container">
                            <img src={profile.image} alt={profile.username} />
                        </div>
                        <div>{profile.first_name}'s profile</div>
                        <div>
                            <div className="icon_container"><img src={Star}/><p>Reviews</p></div>
                            <div className="icon_container"><img src={Comment}/><p>Comments</p></div>
                            <div className="icon_container"><img src={Edit}/><p>Restaurants</p></div>
                            <div className="icon_container"><img src={Restaurant}/><p>Edit profile</p></div>
                        </div>
                    </FirstColumn>
                    <SecondColumn>
                        <Reviews>REVIEWS
                        </Reviews>
                    </SecondColumn>
                    <ThirdColumn>
                        <p>ABOUT {profile.first_name}</p>
                        <div>
                            <p>Location</p>
                            <p>{profile.location}</p>
                        </div>
                        <div>
                            <p>Luna member since</p>
                            <p>Oct, 2020</p>
                        </div>
                        <div>
                            <p>Things I love</p>
                            <p>{profile.things_i_love}</p>
                        </div>
                        <div>
                            <p>Description</p>
                            <p>{profile.description}</p>
                        </div>
                    </ThirdColumn>
                </ContentsContainer>
            </MainContainer>
            <Footer />
        </>
    )
}