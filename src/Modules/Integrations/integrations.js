import React from 'react';
import { Heading } from '@chakra-ui/layout';
import { BreakLine, Flex, BoxSM } from '../../Styles/styles';
import { Input, InputGroup, InputLeftElement, useColorMode } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons';
import useRandomColorPick from '../../Shared-hooks/useRandomColor';

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
                <BoxSM style={{background: useRandomColorPick()}}>Slack</BoxSM>
                <BoxSM>Monday</BoxSM>
                <BoxSM>Jira</BoxSM>
                <BoxSM>Trello</BoxSM>
                <BoxSM>AWS</BoxSM>
                <BoxSM>Azure</BoxSM>
            </Flex>
            <BreakLine />
            <Heading textAlign="left" color={colorMode === 'dark' ? 'white' : 'gray.700'} >Popular Apps</Heading>
            <BreakLine />
            <Flex>
                <BoxSM>Vee</BoxSM>
                <BoxSM>a</BoxSM>
                <BoxSM>a</BoxSM>
                <BoxSM>a</BoxSM>
                <BoxSM>a</BoxSM>
                <BoxSM>a</BoxSM>
            </Flex>
            <Flex>
                <BoxSM>a</BoxSM>
                <BoxSM>a</BoxSM>
                <BoxSM>a</BoxSM>
                <BoxSM>a</BoxSM>
                <BoxSM>a</BoxSM>
            </Flex>
        </>
    )
}

export default Integrations;