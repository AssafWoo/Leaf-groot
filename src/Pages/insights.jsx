import { Heading } from '@chakra-ui/layout';
import React from 'react';
import BarsChart from '../Components/Charts/bar';
import {LightBlue, MainRed } from '../Styles/colors';
import {BoxSize, BreakLine, Flex, Parag, SubHeader } from '../Styles/styles';
import {FaBicycle} from 'react-icons/fa';

const Insights = () => {

    return(
        <Flex>
            <Heading {...SubHeader}>Our insights</Heading>
            <BreakLine />


            <Flex>
                <BoxSize flexSize="1">
                    <Parag>Worse / Best Division</Parag>
                    <Flex>
                        <BoxSize flexSize="1" style={{background:MainRed}}>
                        <Heading {...SubHeader} style={{fontSize:'1.4rem', fontWeight:'600'}} >312Kg</Heading>
                            <Parag>Marketing</Parag>

                        </BoxSize>
                        <BoxSize flexSize="1" style={{background:LightBlue}}>
                            <Heading {...SubHeader} style={{fontSize:'1.4rem', fontWeight:'600'}} >115Kg</Heading>
                            <Parag>R&D</Parag>

                        </BoxSize>
                    </Flex>
                </BoxSize>


                <BoxSize flexSize="1"> 
                    <FaBicycle size="4rem" style={{margin:'auto'}} />
                    <Heading {...SubHeader} style={{fontSize:'1.2rem' , marginBottom:'1rem'}} >Save up to 53Kg per month by improving employees Commute</Heading>
                    <Parag style={{color:LightBlue, cursor:'pointer', fontWeight:'600'}}>Checkout possibilites</Parag>
                </BoxSize>

                <BoxSize flexSize="1" style={{background:LightBlue}}>
                    <Heading {...SubHeader} style={{fontSize:'1.8rem' , marginBottom:'1rem'}} >1500KWh</Heading>
                    <Parag>Electricity saved Total since joining the program</Parag>
                </BoxSize>
            </Flex>



            <Flex>

                <BoxSize flexSize="1">
                    <Parag>Worse / Best Division</Parag>
                    <Flex>
                        <BoxSize flexSize="1" style={{background:MainRed}}>
                        <Heading {...SubHeader} style={{fontSize:'1.4rem', fontWeight:'600'}} >312Kg</Heading>
                            <Parag>Marketing</Parag>

                        </BoxSize>
                        <BoxSize flexSize="1" style={{background:LightBlue}}>
                            <Heading {...SubHeader} style={{fontSize:'1.4rem', fontWeight:'600'}} >115Kg</Heading>
                            <Parag>R&D</Parag>

                        </BoxSize>
                    </Flex>
                </BoxSize>
                <BoxSize flexSize="3">
                        <Heading {...SubHeader} style={{fontSize:'1.4rem'}} >Companies comprasion</Heading>
                        <BreakLine />
                        <BarsChart />
                </BoxSize>

                <BoxSize flexSize="1" style={{background:LightBlue}}>
                    <Heading {...SubHeader} style={{fontSize:'1.8rem' , marginBottom:'1rem'}} >Another header</Heading>
                    <Parag>Blah</Parag>
                </BoxSize>
                </Flex>

            
        </Flex>
    )
}

export default Insights;