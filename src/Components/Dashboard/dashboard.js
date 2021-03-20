import { Heading } from '@chakra-ui/layout';
import React from 'react';
import { Flex,BoxLG,BoxMD,BoxSM,BreakLine, MyIcon  } from '../../Common/styles';
import { DetailsBox, MainChartBox,InsightsWrapper,ProgressBox } from './style';
import { SettingsIcon, BellIcon } from '@chakra-ui/icons'

const Dashboard = () => {

    return(
        <>
        <Flex>
            <BoxMD isInvisible={true}>
            <Flex>
                <BoxLG header={true}>
                    <Heading textAlign="left">Hello Assaf</Heading>
                    <BreakLine />
                    <p style={{textAlign:"left"}}>Pleasure to see you again!</p>
                </BoxLG>
            </Flex>
                <Flex>
                    <DetailsBox>left box</DetailsBox>
                    <MainChartBox>right box</MainChartBox>
                </Flex>
                <ProgressBox>Progress</ProgressBox>
                <InsightsWrapper>
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
                </InsightsWrapper>
            </BoxMD>
            <BoxSM isInvisible={true}>
                <Flex>
                    <BoxSM isInvisible={true}><SettingsIcon cursor="pointer" w={5} h={5} color="white" /></BoxSM>
                    <BoxSM isInvisible={true}><BellIcon cursor="pointer" w={5} h={5} color="white" /></BoxSM>
                    <BoxSM isInvisible={true}>
                        <MyIcon className="icon" />
                    </BoxSM>
                </Flex>
                <BoxMD>Company's details</BoxMD>

            </BoxSM>
        </Flex>
        
        </>
    )
}

export default Dashboard;