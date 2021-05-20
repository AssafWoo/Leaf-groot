import React from 'react';
import { Heading } from '@chakra-ui/layout';
import { BoxSize, BreakLine, Flex } from '../Styles/styles';
import { Button } from '@chakra-ui/button';
import { Link } from 'react-router-dom';


// need to build a database for integrations data
const ErrorPage = () => {

    return(
        <Flex style={{justifyContent:'center', alignContent:'center'}}>
           <BoxSize isInvisible={true} FlexSize="5">
                <Heading color="white" display="inline-block" fontWeight="300">Something went wrong...</Heading>
                <BreakLine />
                <Link to="/login"><Button width="100%" colorScheme="green" marginTop=".5rem">Go to safety</Button></Link>
            </BoxSize>

        </Flex>
    )
}

export default ErrorPage;