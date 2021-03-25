import React  from 'react';
import { Heading } from '@chakra-ui/layout';
import { Flex,BoxMD,BoxSM, BoxLG } from '../../Styles/styles'
import SingleUser from '../../Components/UserAvatar/SingelUser';
import { DarkTheme } from '../../Styles/colors';
import FilterBy from '../../Components/Filter/filter_by';


const DashboardLeftPart = ({companyName, userName}) => {

    return(
        <BoxMD isInvisible={true}>
        <Flex>
            <BoxLG header={true}>
                <Flex>
                    <BoxLG isInvisible="true">
                        <Heading mb="2" textAlign="left" fontWeight="400" color={DarkTheme}>Wazzaa {userName}</Heading>
                        <p style={{textAlign:"left", color:DarkTheme}}>Pleasure to see you again.</p>
                        <p style={{textAlign:"left", color:'white'}}>Lets see how {companyName} is doing!</p>
                    </BoxLG>
                    <BoxMD isInvisible={true}>
                        <SingleUser desiredPhoto="company" />
                    </BoxMD>
                </Flex>
            </BoxLG>
        </Flex>
           
        <FilterBy />

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

export default DashboardLeftPart;