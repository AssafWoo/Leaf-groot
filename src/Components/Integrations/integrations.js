import { Heading } from '@chakra-ui/layout';
import React from 'react';
import { BreakLine, Flex } from '../../Common/styles';
import { InsightBoxMD,InsightBoxSM } from '../../Common/styles';
import { Input, InputGroup, InputLeftElement, useColorMode } from "@chakra-ui/react"
import {    SearchIcon } from '@chakra-ui/icons';

const Integrations = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return(
        <>
            <Heading textAlign="left" color={colorMode === 'dark' ? 'white' : 'gray.700'} >Integration with Apps</Heading>
            <BreakLine />
            <InputGroup>
                <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.700" />}
                />  
                <Input type="search" placeholder="Search" background="white" borderRadius="20px" color="gray.700" />
            </InputGroup>
            <BreakLine />

              <Heading textAlign="left" color={colorMode === 'dark' ? 'white' : 'gray.700'} >Popular Apps</Heading>
            <BreakLine />
            <Flex>
                <InsightBoxSM>a</InsightBoxSM>
                <InsightBoxSM>a</InsightBoxSM>
                <InsightBoxSM>a</InsightBoxSM>
                <InsightBoxSM>a</InsightBoxSM>
                <InsightBoxSM>a</InsightBoxSM>
                <InsightBoxSM>a</InsightBoxSM>
            </Flex>
            <Flex>
                <InsightBoxSM>a</InsightBoxSM>
                <InsightBoxSM>a</InsightBoxSM>
                <InsightBoxSM>a</InsightBoxSM>
                <InsightBoxSM>a</InsightBoxSM>
                <InsightBoxSM>a</InsightBoxSM>
            </Flex>
        </>
    )
}

export default Integrations;