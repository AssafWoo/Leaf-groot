import React  from 'react';
import { Heading } from '@chakra-ui/layout';
import { Flex, BoxSize } from '../../Styles/styles'
import SingleUser from '../../Components/UserAvatar/SingelUser';
import { DarkTheme, MainGrey } from '../../Styles/colors';
import FilterBy from '../../Components/Filter/filter_by';


const DashboardLeftPart = ({companyName, userName}) => {

    return(
        <BoxSize flexSize="3" isInvisible={true} > 
        <Flex>
            <BoxSize flexSize="5" header={true}>
                <Flex>
                    <BoxSize flexSize="5" isInvisible="true">
                        <Heading mb="2" textAlign="left" fontWeight="500" color={DarkTheme}>Wazzaa {userName}</Heading>
                        <p style={{textAlign:"left", color:DarkTheme}}>Pleasure to see you again.</p>
                        <p style={{textAlign:"left", color:'white'}}>Lets see how {companyName} is doing!</p>
                    </BoxSize>
                    <BoxSize flexSize="3" isInvisible={true}>
                        <SingleUser desiredPhoto="company" />
                    </BoxSize>
                </Flex>
            </BoxSize>
        </Flex>
           
        <FilterBy />

            <Flex>
                <BoxSize flexSize="3" >left box</BoxSize>
                <BoxSize flexSize="3">right box</BoxSize>
            </Flex>
            <BoxSize flexSize="5">Progress</BoxSize>
                <Flex>
                    <BoxSize flexSize="3" style={{background:MainGrey, color:DarkTheme}}>a</BoxSize>
                    <BoxSize flexSize="3">a</BoxSize>
                    <BoxSize flexSize="1">a</BoxSize>
                </Flex>
                <Flex>
                    <BoxSize flexSize="3">a</BoxSize>
                    <BoxSize flexSize="1" style={{background:MainGrey, color:DarkTheme}}>a</BoxSize>
                    <BoxSize flexSize="3">a</BoxSize>
                </Flex>
                <Flex>
                    <BoxSize flexSize="3">a</BoxSize>
                    <BoxSize flexSize="1" style={{background:MainGrey, color:DarkTheme}}>a</BoxSize>
                    <BoxSize flexSize="3">a</BoxSize>
                </Flex>
                
        </BoxSize>
    )
}

export default DashboardLeftPart;