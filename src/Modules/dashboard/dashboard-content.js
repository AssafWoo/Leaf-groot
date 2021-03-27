import React  from 'react';
import { Heading } from '@chakra-ui/layout';
import { Flex, BoxSize } from '../../Styles/styles'
import SingleUser from '../../Components/UserAvatar/SingelUser';
import { DarkerTheme, MainGrey } from '../../Styles/colors';
import FilterBy from '../../Components/Filter/filter_by';
import {useGetTime} from '../../Utils/useGetTime';

const DashboardContent = ({companyName, userName}) => {
    const CurrentTime = useGetTime();
    return(
        <BoxSize flexSize="3" isInvisible={true} > 
        <Flex>
            <BoxSize flexSize="5" header={true}>
                <Flex>
                    <BoxSize flexSize="5" isInvisible="true">
                        <Heading mb="2" textAlign="left" fontWeight="500" color={DarkerTheme}>{CurrentTime} {userName}</Heading>
                        <p style={{textAlign:"left", color:DarkerTheme}}>Pleasure to see you again.</p>
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
                    <BoxSize flexSize="3" style={{background:MainGrey, color:DarkerTheme}}>a</BoxSize>
                    <BoxSize flexSize="3">a</BoxSize>
                    <BoxSize flexSize="1">a</BoxSize>
                </Flex>
                <Flex>
                    <BoxSize flexSize="3">a</BoxSize>
                    <BoxSize flexSize="1" style={{background:MainGrey, color:DarkerTheme}}>a</BoxSize>
                    <BoxSize flexSize="3">a</BoxSize>
                </Flex>
                <Flex>
                    <BoxSize flexSize="3">a</BoxSize>
                    <BoxSize flexSize="1" style={{background:MainGrey, color:DarkerTheme}}>a</BoxSize>
                    <BoxSize flexSize="3">a</BoxSize>
                </Flex>
                
        </BoxSize>
    )
}

export default DashboardContent;