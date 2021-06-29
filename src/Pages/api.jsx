import React from 'react';
import { Heading } from '@chakra-ui/layout';
import { BoxSize, BreakLine, Flex, SubHeader, Parag } from '../Styles/styles';


// need to build a database for integrations data
const APICallsComponent = () => {

    return(
        <Flex>
            <Heading {...SubHeader}>Api Keys</Heading>
            <Parag style={{color:'white'}}>Api keys unique for you</Parag>
            <BreakLine />
            <BoxSize FlexSize="5">
                Api keys, secret etc...
            </BoxSize>

        </Flex>
    )
}

export default APICallsComponent;