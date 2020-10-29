import React from 'react';
import Style from './style';
import { Navbar } from '../Header/index';
import { Footer } from '../footer/footer';

export const CreateNewRestaurant = () => {

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
                            <Style.InputFieldName type="text"></Style.InputFieldName>
                            <Style.InputFieldAddress type="text"></Style.InputFieldAddress>
                            <Style.InputFieldContact type="text"></Style.InputFieldContact>
                            <Style.InputFieldDetails type="text"></Style.InputFieldDetails>
                        </Style.FormLeftSide>
                    </Style.ContainerFormLeftSide>
                    <Style.ContainerFormCenter>
                        <Style.FormCenter>
                            <Style.InputFieldCategory type="dropdown"></Style.InputFieldCategory>
                            <Style.InputFieldCity type="text"></Style.InputFieldCity>
                            <Style.InputFieldPhone type="text"></Style.InputFieldPhone>
                            <Style.InputFieldPriceLevel>
                                <Style.LevelPrice></Style.LevelPrice>
                                <Style.LevelPrice>LOW</Style.LevelPrice>
                                <Style.LevelPrice>MEDIUM</Style.LevelPrice>
                                <Style.LevelPrice>HIGH</Style.LevelPrice>
                            </Style.InputFieldPriceLevel>
                        </Style.FormCenter>
                    </Style.ContainerFormCenter>
                    <Style.ContainerFormRight>
                        <Style.FormRightSide>
                            <Style.InputFieldCounty>
                                <Style.City></Style.City>
                                <Style.City>SWITZERLAND</Style.City>
                                <Style.City>ITALY</Style.City>
                                <Style.City>ENGLAND</Style.City>
                            </Style.InputFieldCounty>
                            <Style.InputFieldCity type="text"></Style.InputFieldCity>
                            <Style.InputFieldPhone type="text"></Style.InputFieldPhone>
                            <Style.RestaurantImage type="file"></Style.RestaurantImage>
                        </Style.FormRightSide>
                    </Style.ContainerFormRight>
                </Style.ContainerFormCreateNewRestaurant>
            </Style.MainContainerFormNewRestaurant>
            <Footer />
        </>
    )

}