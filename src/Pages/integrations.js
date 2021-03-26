import React from 'react';
import { Heading } from '@chakra-ui/layout';
import { BreakLine, Flex, BoxSize } from '../Styles/styles';
import { Input, InputGroup, InputLeftElement, useColorMode } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons';
import useRandomColorPick from '../Utils/useRandomColor';


// need to build a database for integrations data
const Integrations = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return(
        <>
            <Heading textAlign="left" color={colorMode === 'dark' ? 'white' : 'gray.700'} >Your Apps</Heading>
            <BreakLine />
            <InputGroup>
            <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.700" />}
                />  
                <Input type="search" placeholder="Search for apps" background="white" borderRadius="20px" color="gray.700" />
            </InputGroup>
            <BreakLine />
            <Flex>
                <BoxSize flexSize="1" style={{background: useRandomColorPick()}}>Slack</BoxSize>
                <BoxSize flexSize="1">Monday</BoxSize>
                <BoxSize flexSize="1">Jira</BoxSize>
                <BoxSize flexSize="1">Trello</BoxSize>
                <BoxSize flexSize="1">AWS</BoxSize>
                <BoxSize flexSize="1">Azure</BoxSize>
            </Flex>
            <BreakLine />
            <Heading textAlign="left" color={colorMode === 'dark' ? 'white' : 'gray.700'} >Popular Apps</Heading>
            <BreakLine />
            <Flex>
                <BoxSize flexSize="1">Vee</BoxSize>
                <BoxSize flexSize="1">a</BoxSize>
                <BoxSize flexSize="1">a</BoxSize>
                <BoxSize flexSize="1">a</BoxSize>
                <BoxSize flexSize="1">a</BoxSize>
                <BoxSize flexSize="1">a</BoxSize>
            </Flex>
            <Flex>
                <BoxSize flexSize="1">a</BoxSize>
                <BoxSize flexSize="1">a</BoxSize>
                <BoxSize flexSize="1">a</BoxSize>
                <BoxSize flexSize="1">a</BoxSize>
                <BoxSize flexSize="1">a</BoxSize>
            </Flex>
        </>
    )
}

export default Integrations;