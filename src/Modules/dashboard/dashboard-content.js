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
        <>

            <BoxSize flexSize="5" isInvisible={true} > 
            <Flex>
                <BoxSize flexSize="3" isInvisible="true">
                    <Heading fontSize="2rem" mb="2" textAlign="left" fontWeight="300" color='white'>Howdy <b>{userName}</b>, {CurrentTime}</Heading>
                    <p style={{textAlign:"left", color:'white'}}>Lets change the world!</p>
                    
                </BoxSize>
                <BoxSize flexSize="3" isInvisible={true} style={{textAlign:'right', padding:'0'}}>
                    <SingleUser desiredPhoto="company" />
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
                        <BoxSize flexSize="1">a</BoxSize>
                        <BoxSize flexSize="3">a</BoxSize>
                    </Flex>
                    <Flex>
                        <BoxSize flexSize="3">a</BoxSize>
                        <BoxSize flexSize="1" style={{background:MainGrey, color:DarkerTheme}}>a</BoxSize>
                        <BoxSize flexSize="3">a</BoxSize>
                    </Flex>
                    
            </BoxSize>
        </>
    )
}

export default DashboardContent;