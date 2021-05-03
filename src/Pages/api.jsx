import React from 'react';
import { Heading } from '@chakra-ui/layout';
import { BreakLine, Flex, SubHeader } from '../Styles/styles';


// need to build a database for integrations data
const APICallsComponent = () => {

    return(
            <Flex>
                <Heading {...SubHeader}>Your Api Requests</Heading>
                <BreakLine />
        </Flex>
    )
}

export default APICallsComponent;