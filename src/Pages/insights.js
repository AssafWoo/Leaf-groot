import { Heading } from '@chakra-ui/layout';
import React from 'react';
import {BoxSize, BreakLine, Flex, SubHeader } from '../Styles/styles';


const Insights = () => {

    return(
        <>
            <Heading {...SubHeader}>Our insights</Heading>
            <BreakLine />
            <Flex>
                <BoxSize flexSize="1">Worse / Best Division</BoxSize>
                <BoxSize flexSize="1">Worse / Best Integration</BoxSize>
                <BoxSize>Monday Saved</BoxSize>
            </Flex>
            <Flex>
                <BoxSize flexSize="1">Where can we save more</BoxSize>
                <BoxSize flexSize="3">Rank comppared to other companies</BoxSize>
                <BoxSize flexSize="3">Taxes return</BoxSize>
            </Flex>
            <Flex>
                <BoxSize flexSize="5">Trees / offsets planted / contributed to</BoxSize>
                <BoxSize flexSize="1">Electricity saved since</BoxSize>
            </Flex>
        </>
    )
}

export default Insights;