import React, { useRef }  from 'react';
import { Heading } from '@chakra-ui/layout';
import { Flex, BoxSize, BreakLine } from '../../Styles/styles'
import SingleUser from '../../Components/UserAvatar/SingelUser';
import { DarkerTheme,MainBlue, LightBlue } from '../../Styles/colors';
import FilterBy from '../../Components/Filter/filter_by';
import {useGetTime} from '../../Utils/useGetTime';
import BarsChart from '../../Components/Charts/bar';
import { useScreenSize } from '../../Utils/useScreenSize';

const DashboardContent = ({companyName, userName}) => {
    const CurrentTime = useGetTime();
    const screenSize = useScreenSize();

    const myStackedRef = useRef();

    return(
        <>
            <BoxSize flexSize="5" isInvisible={true} > 
            <Flex>
                <BoxSize flexSize="3" isInvisible="true">
                    <Heading fontSize="2rem" mb="2" textAlign="left" fontWeight="300" color='white'>Howdy <b>{userName}</b>, {CurrentTime}</Heading>
                    <p style={{textAlign:"left", color:'white'}}>Lets change the world!</p>
                    
                </BoxSize>
                {screenSize === '3-cols' ? 
                <BoxSize flexSize="3" isInvisible={true} style={{textAlign:'right', padding:'0'}}>
                    <SingleUser desiredPhoto="company" />
                </BoxSize> : ''}

            </Flex>
            

                <Flex>
                    <BoxSize flexSize="3">
                        <FilterBy byParameter="CO2 Volume" />
                        <BreakLine />
                        <BarsChart />
                    </BoxSize>
                </Flex>
                <BoxSize ref={myStackedRef} flexSize="3">
                    <Heading fontWeight="300" textAlign="left" fontSize="1.4rem">Orders</Heading>
                    <BreakLine />
                    insert table
                </BoxSize>
                    <Flex>
                        <BoxSize flexSize="3" style={{background:LightBlue}}>
                            <Heading fontWeight="300" textAlign="left" fontSize="1.4rem">Volunteer</Heading>
                            <BreakLine />
                            <p style={{color:DarkerTheme, cursor:'pointer' }}>Explore volunteer opportunities</p>
                        </BoxSize>
                        <BoxSize flexSize="3">
                            <Heading fontWeight="300" textAlign="left" fontSize="1.4rem">Our Blog</Heading>
                            <BreakLine />
                            <p style={{color:MainBlue, cursor:'pointer' }}>Put blog link and card</p>
                        </BoxSize>
                   </Flex>
                    
            </BoxSize>
        </>
    )
}

export default DashboardContent;