import React from 'react';
import { Heading } from '@chakra-ui/layout';
import { Flex,BoxMD,BoxSM, BoxLG } from '../../../Styles/styles'
import SingleUser from '../../../Ui/UserAvatar/SingelUser';


const DashboardRightPart = () => {

    return(
        <BoxMD isInvisible={true}>
        <Flex>
            <BoxLG header={true}>
                <Flex>
                    <BoxLG isInvisible="true">
                        <Heading textAlign="left" fontWeight="400">Hello Assaf</Heading>
                        <p style={{textAlign:"left"}}>Pleasure to see you again!</p>
                    </BoxLG>
                    <BoxMD isInvisible={true}>
                        <SingleUser desiredPhoto="company" />
                    </BoxMD>
                </Flex>
            </BoxLG>

        </Flex>
            <Flex>
                <BoxMD>left box</BoxMD>
                <BoxMD>right box</BoxMD>
            </Flex>
            <BoxLG>Progress</BoxLG>
                <Flex>
                    <BoxMD>a</BoxMD>
                    <BoxMD>a</BoxMD>
                    <BoxSM>a</BoxSM>
                </Flex>
                <Flex>
                    <BoxMD>a</BoxMD>
                    <BoxSM>a</BoxSM>
                    <BoxMD>a</BoxMD>
                </Flex>
        </BoxMD>
    )
}

export default DashboardRightPart;