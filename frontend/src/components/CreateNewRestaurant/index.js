import React, { useState } from 'react';
import Style from './style';
import { Navbar } from '../Header/index';
import { Footer } from '../Footer/footer';


export const CreateNewRestaurant = () => {

    const [name, setName] = useState("");
    const [street, setStreet] = useState("");
    const [website, setWebsite] = useState("");
    const [openingHours, setOpeningHours] = useState("");
    const [category, setCategory] = useState("")
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState();
    const [priceLevel, setPriceLevel] = useState("");
    const [country, setCountry] = useState();
    const [zip, setZip] = useState();
    const [email, setEmail] = useState("");


    const hadleNewResturant = () => {

        const body = JSON.stringify()

        const config = {
            method: "POST",
            body: body,
        }

        fetch("http://0.0.0.0:8000/backend/api/restaurants/new/", config)

    }


    return (
        <>
            <Navbar />
            <Style.MainContainerFormNewRestaurant>
                <Style.DivCreateNewRestaurantText>
                    <Style.TextCreateNewRestaurant>CREATE NEW RESTAURANT</Style.TextCreateNewRestaurant>
                    <Style.Line></Style.Line>
                </Style.DivCreateNewRestaurantText>
                <Style.ContainerFormCreateNewRestaurant>
                    <Style.ContainerFormLeftSide>
                        <Style.FormLeftSide>
                            <Style.LabelName>Name *</Style.LabelName>
                            <Style.InputFieldName type="text"></Style.InputFieldName>
                            <Style.LabelStreet>Street *</Style.LabelStreet>
                            <Style.InputFieldAddress type="text"></Style.InputFieldAddress>
                            <Style.LabelWebsite>Website</Style.LabelWebsite>
                            <Style.InputFieldContact type="text"></Style.InputFieldContact>
                            <Style.LabelOpeningHours>Opening Hours*</Style.LabelOpeningHours>
                            <Style.InputFieldDetails type="text"></Style.InputFieldDetails>
                        </Style.FormLeftSide>
                    </Style.ContainerFormLeftSide>
                    <Style.ContainerFormCenter>
                        <Style.FormCenter>
                            <Style.LabelCategory>Category *</Style.LabelCategory>
                            <Style.InputFieldCategory type="dropdown"></Style.InputFieldCategory>
                            <Style.LabelCity>City *</Style.LabelCity>
                            <Style.InputFieldCity type="text"></Style.InputFieldCity>
                            <Style.LabelPhone>Phone *</Style.LabelPhone>
                            <Style.InputFieldPhone type="text"></Style.InputFieldPhone>
                            <Style.LabelPriceLevel>Price Level</Style.LabelPriceLevel>
                            <Style.InputFieldPriceLevel>
                                <Style.LevelPrice></Style.LevelPrice>
                                <Style.LevelPrice>LOW</Style.LevelPrice>
                                <Style.LevelPrice>MEDIUM</Style.LevelPrice>
                                <Style.LevelPrice>HIGH</Style.LevelPrice>
                            </Style.InputFieldPriceLevel>
                        </Style.FormCenter>
                        <Style.ContainerButtonSearch>
                            <Style.ButtonSerch onClick={hadleNewResturant}>Search</Style.ButtonSerch>
                        </Style.ContainerButtonSearch>
                    </Style.ContainerFormCenter>
                    <Style.ContainerFormRight>
                        <Style.FormRightSide>
                            <Style.LabelCountry>Country *</Style.LabelCountry>
                            <Style.InputFieldCounty>
                                <Style.City></Style.City>
                                <Style.City>SWITZERLAND</Style.City>
                                <Style.City>ITALY</Style.City>
                                <Style.City>ENGLAND</Style.City>
                            </Style.InputFieldCounty>
                            <Style.LabelZip>Zip</Style.LabelZip>
                            <Style.InputZip type="text"></Style.InputZip>
                            <Style.LabelEmail>Email</Style.LabelEmail>
                            <Style.InputFieldEmail type="email"></Style.InputFieldEmail>
                            <Style.LabelImage>Image</Style.LabelImage>
                            <Style.RestaurantImage type="file"></Style.RestaurantImage>
                        </Style.FormRightSide>
                    </Style.ContainerFormRight>
                </Style.ContainerFormCreateNewRestaurant>
            </Style.MainContainerFormNewRestaurant>
            <Footer />
        </>
    )

}