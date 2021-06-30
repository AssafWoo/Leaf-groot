import React, { useRef }  from 'react';
import { Heading } from '@chakra-ui/layout';
import { Flex, BoxSize, BreakLine, Parag } from '../../Styles/styles'
import SingleUser from '../../Components/UserAvatar/SingelUser';
import { DarkerTheme, PurpleBlue } from '../../Styles/colors';
import {useGetTime} from '../../Utils/useGetTime';
import BarsChart from '../../Components/Charts/bar';
import { useScreenSize } from '../../Utils/useScreenSize';
import { SwitchToggleButton } from '../../Components/Switch/switch';
import BlogCard from '../../Components/Cards/blog_card';
import VolunteerCard from '../../Components/Cards/volunteer_card';
import { Button } from '@chakra-ui/button';
import TableTemplate from '../../Components/Table/table-template';
import { transactionsColumns } from '../../Components/Table/data-stracture';

const DashboardContent = ({companyName, userName, selected, handleToggleFilter, dashboardData, tableData}) => {
    const CurrentTime = useGetTime();
    const screenSize = useScreenSize();

    const myStackedRef = useRef();

    const toggleFilter = () => {
        handleToggleFilter();
    } 

    return(
        <>
            <BoxSize flexSize="5" isInvisible={true} > 
            <Flex>
                <BoxSize flexSize="3" isInvisible={true}>
                    <Heading fontSize="2rem" mb="2" textAlign="left" fontWeight="300" color='white'>Howdy <b>{userName}</b>, {CurrentTime}</Heading>
                    <p style={{textAlign:"left", color:'white'}}>Lets change the world!</p>
                    
                </BoxSize>
                {screenSize === '3-cols' ? 
                <BoxSize flexSize="3" isInvisible={true} style={{textAlign:'right', padding:'0'}}>
                    <SingleUser desiredPhoto="company" />
                </BoxSize> : ''}
            </Flex>
                <BoxSize flexSize="3" style={{textAlign:'center'}}>
                    <Flex>
                        <BoxSize flexSize="1" isInvisible={true} style={{background:DarkerTheme}}>
                            <Heading fontWeight="600" textAlign="center" fontSize="3rem" >1,210</Heading>
                            <Parag style={{textAlign:'center'}}>Equivalent number of trees</Parag>
                        </BoxSize>
                        <BoxSize flexSize="1" isInvisible={true} style={{background:DarkerTheme}}>
                            <Heading fontWeight="600" textAlign="center" fontSize="3rem" >20,432$</Heading>
                            <Parag style={{textAlign:'center'}}>In donations credits</Parag>
                            <Button colorScheme="green" marginTop=".5rem">Use</Button>
                        </BoxSize>
                        <BoxSize flexSize="1" isInvisible={true} style={{background:DarkerTheme}}>
                            <Heading fontWeight="600" textAlign="center" fontSize="3rem" >15,124 </Heading>
                            <Parag style={{textAlign:'center'}}>Tonnn of CO2 saved since started using</Parag>
                            <Button colorScheme="green" marginTop=".5rem">View</Button>
                        </BoxSize>
                    </Flex>
                </BoxSize>

                    <BoxSize flexSize="3">
                        <Flex>
                            <BoxSize isInvisible="true" flexSize="1">
                                <SwitchToggleButton
                                    selected={selected}
                                    toggleSelected={toggleFilter}
                                />
                            </BoxSize>
                        </Flex>
                        <BreakLine />
                        <BarsChart data={dashboardData} />
                    </BoxSize>

                <BoxSize ref={myStackedRef} flexSize="3">
                    <Heading fontWeight="300" textAlign="left" fontSize="1.4rem">Orders & Projects</Heading>
                    <BreakLine />
                    <TableTemplate tableData={tableData} columnsType={transactionsColumns} />
                </BoxSize>

                    <Flex>
                        <BoxSize flexSize="3" style={{background:PurpleBlue}}>
                            <Heading  fontWeight="300" textAlign="left" fontSize="1.4rem">Volunteer</Heading>
                            <BreakLine />
                            <VolunteerCard />
                        </BoxSize>
                        <BoxSize flexSize="3">
                            <Heading fontWeight="300" textAlign="left" fontSize="1.4rem">Our Blog</Heading>
                            <BreakLine />
                            <BlogCard />
                        </BoxSize>
                   </Flex>
                    
            </BoxSize>
        </>
    )
}

export default DashboardContent;