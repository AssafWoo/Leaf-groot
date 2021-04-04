import React, { useRef }  from 'react';
import { Heading } from '@chakra-ui/layout';
import { Flex, BoxSize, BreakLine } from '../../Styles/styles'
import SingleUser from '../../Components/UserAvatar/SingelUser';
import { DarkerTheme, MainGrey,MainBlue } from '../../Styles/colors';
import FilterBy from '../../Components/Filter/filter_by';
import {useGetTime} from '../../Utils/useGetTime';
import DoughNut from '../../Components/Charts/doughnut';
import StackedArea from '../../Components/Charts/stackedArea';
import useGetWidth from '../../Utils/useGetWidth';
import BarsChart from '../../Components/Charts/bar';

const DashboardContent = ({companyName, userName}) => {
    const CurrentTime = useGetTime();

    const myPieRef = useRef();
    const {itemWidth1} = useGetWidth(myPieRef);

    const myStackedRef = useRef();
    const {itemWidth2} = useGetWidth(myStackedRef);

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
            

                <Flex>
                    <BoxSize ref={myPieRef} flexSize="3" >
                        <Flex>
                            <BoxSize style={{paddingTop:0, marginTop:0}} flexSize="1">
                                <Heading fontWeight="300" textAlign="left" fontSize="1.4rem">My emissions</Heading>
                            </BoxSize>
                            <BoxSize style={{paddingTop:0, marginTop:0}} flexSize="1">
                                <FilterBy /> 
                            </BoxSize>
                        </Flex>
                        <DoughNut width={itemWidth1} /> 
                    </BoxSize>
                    <BoxSize flexSize="3">
                        <Heading fontWeight="300" textAlign="left" fontSize="1.4rem">Companies comprasion</Heading>
                        <BreakLine />
                        <BarsChart />
                    </BoxSize>
                </Flex>
                <BoxSize ref={myStackedRef} flexSize="5">
                    <Heading fontWeight="300" textAlign="left" fontSize="1.4rem">My progress</Heading>
                    <BreakLine />
                    <StackedArea width={itemWidth2} />
                </BoxSize>
                    <Flex>
                        <BoxSize flexSize="3" >
                            <Heading fontWeight="300" textAlign="left" fontSize="1.4rem">Recent offsets</Heading>
                            <BreakLine />
                            <p>No offsets bought yet</p>
                            <BreakLine />
                            <p style={{color:MainBlue, cursor:'pointer' }}>Explore offsets market</p>

                        </BoxSize>
                        <BoxSize flexSize="3">
                            <Heading fontWeight="300" textAlign="left" fontSize="1.4rem">Volunteer</Heading>
                            <BreakLine />
                            <p style={{color:MainBlue, cursor:'pointer' }}>Explore volunteer opportunities</p>
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