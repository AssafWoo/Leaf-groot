import React from 'react';
import { Heading } from '@chakra-ui/layout';
import { BreakLine, Flex, SubHeader } from '../Styles/styles';


// need to build a database for integrations data
const Integrations = () => {

    return(
            <Flex>
                <Heading {...SubHeader}>Your integrations</Heading>
                <BreakLine />
                {/* <Popup
                trigger={<BoxSize style={{cursor:'pointer'}} flexSize="1">Vee</BoxSize>}
                header="Vee application"
                content="This is the the vee data content"
                actionTrigger={<Button colorScheme="green">
                                Yes I understand
                                </Button>}
                /> */}
        </Flex>
    )
}

export default Integrations;