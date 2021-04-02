import React, { useRef }  from 'react';
import { Heading } from '@chakra-ui/layout';
import { Flex, BoxSize } from '../../Styles/styles'
import SingleUser from '../../Components/UserAvatar/SingelUser';
import { DarkerTheme, MainGrey } from '../../Styles/colors';
import FilterBy from '../../Components/Filter/filter_by';
import {useGetTime} from '../../Utils/useGetTime';
import DoughNut from '../../Components/Charts/doughnut';
import StackedArea from '../../Components/Charts/stackedArea';
import useGetWidth from '../../Utils/useGetWidth';


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
                {/* <FilterBy /> */}
            </Flex>
            

                <Flex>
                    <BoxSize ref={myPieRef} flexSize="3" >
                        <DoughNut width={itemWidth1} /> 
                    </BoxSize>
                    <BoxSize flexSize="3">right box</BoxSize>
                </Flex>
                <BoxSize ref={myStackedRef} flexSize="5">
                    <StackedArea width={itemWidth2} />
                </BoxSize>
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