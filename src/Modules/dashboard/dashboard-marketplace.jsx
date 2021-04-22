import React from 'react';
import { Heading } from '@chakra-ui/layout';
import { Flex, BoxSize, LayoutGapWrapper } from '../../Styles/styles'
import SubjectCard from '../../Components/Cards/subject_card';

const DashboardMarketPlace = ({companyName, userName}) => {

    return(
        <LayoutGapWrapper>
            <BoxSize flexSize="5" isInvisible={true} >
            <Heading fontSize="2rem" mb="2" textAlign="left" fontWeight="300" color='white'>Popular</Heading>
            <Flex>
                <SubjectCard />
                <SubjectCard />
                <SubjectCard />
                <SubjectCard />
                <SubjectCard />

            </Flex>
            </BoxSize>
        </LayoutGapWrapper>
    )
}

export default DashboardMarketPlace;