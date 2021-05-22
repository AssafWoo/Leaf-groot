import { Heading } from '@chakra-ui/layout';
import React from 'react';
import {DarkerTheme, DarkTheme, LightBlue, MainGreen, MainPink, MainYellow } from '../Styles/colors';
import {BoxSize, BreakLine, Flex, Parag, SubHeader } from '../Styles/styles';

const Insights = () => {

    return(
        <Flex>
            <Heading {...SubHeader}>Our insights</Heading>
            <BreakLine />
            <Flex>
                    <BoxSize flexSize="1" style={{background:MainPink}}>
                        <Heading {...SubHeader} style={{fontSize:'1.8rem' , marginBottom:'1rem'}} >23,000 Tonne CO2</Heading>
                        <Parag>CO2 saved Total since joining the program</Parag>
                    </BoxSize>
                    <BoxSize flexSize="1" style={{background:LightBlue}}>
                        <Heading {...SubHeader} style={{fontSize:'1.8rem' , marginBottom:'1rem'}} >20,000 Tonne Water</Heading>
                        <Parag>Water saved Total since joining the program</Parag>
                    </BoxSize>
                <BoxSize flexSize="1" style={{background:MainYellow, color:'black'}}>
                    <Heading {...SubHeader} style={{fontSize:'1.8rem' , marginBottom:'1rem', color:'black'}} >1500KWh</Heading>
                    <Parag>Electricity saved Total since joining the program</Parag>
                </BoxSize>
            </Flex>
            <Flex>
                    <BoxSize flexSize="1" style={{background:DarkTheme}}>
                        <Heading {...SubHeader} style={{fontSize:'1.8rem' , marginBottom:'1rem'}} >230,000 Customers</Heading>
                        <Parag>Customers approved to reduce their carbon footprint since joining the program</Parag>
                    </BoxSize>
                    <BoxSize flexSize="1" style={{background:DarkerTheme, border:'1px solid white'}}>
                        <Heading {...SubHeader} style={{fontSize:'1.8rem' , marginBottom:'1rem'}} >5 Countries</Heading>
                        <Parag>Are benefeting from your projects since joining the program</Parag>
                    </BoxSize>
                <BoxSize flexSize="1" style={{background:MainGreen}}>
                    <Heading {...SubHeader} style={{fontSize:'1.8rem' , marginBottom:'1rem'}} >50,000$</Heading>
                    <Parag>Donated to projects in total since joining the program</Parag>
                </BoxSize>
            </Flex>
        
        </Flex>
    )
}

export default Insights;