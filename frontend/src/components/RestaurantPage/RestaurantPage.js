import React, {Fragment} from 'react'
import {Navbar} from '../Header/index'
import {Footer} from '../footer/footer'
import {RestauratntImage, RestaurantDetails, InputForm} from './style'
import Star from '../../images/svg/star.svg';
import Clock from '../../images/svg/clock.svg'
import Money from '../../images/svg/money.svg';


const RestaurantPage = () => {
    return (
        <Fragment>
            <Navbar />
            <RestauratntImage>
                <RestaurantDetails>
                    <h2>Laderlich Suisse</h2>
                    <p>Choccolatiers & Shops</p>
                    <img src={Star} />
                    <img src={Star} />
                    <img src={Star} />
                    <img src={Star} />
                    <img src={Star} />
                    <p>0 reviews</p>
                </RestaurantDetails>
            </RestauratntImage>
            <InputForm>
                <input type='text' placeholder='Filter List...' />
                <button />
            </InputForm>
            <date>
                <img src={Clock} />
                <p>Monday-Friday 9:00 am - 8:00 pm</p>
            </date>
            <hr />
                <img src={Money} />
                <p>Price level: $$$</p>
                <div>
                    <button>WRITE A REVIEW</button>
                    <button>EDIT DATA</button>
                </div>
            <Footer />
        </Fragment>
    )
}

export default RestaurantPage;
