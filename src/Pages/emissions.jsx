import React from 'react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs';
import { DarkTheme, MainGrey } from '../Styles/colors';
import ElectricityPanel from '../Modules/emissions/electricity-panel';
import { Heading } from '@chakra-ui/layout';
import { BreakLine, Flex, SubHeader } from '../Styles/styles';



// divide sections into different files
const EmissionsComponent = () => {

    return (
        <Flex>
            <Heading {...SubHeader}>Emissions</Heading>
            <BreakLine />
                <Tabs w="100%" variant="soft-rounded" borderRadius="20px" padding="1rem" colorScheme="facebook" bg={DarkTheme} >
                    <TabList marginBottom="1rem">
                        <Tab fontSize="1.2rem" color="white" >Total</Tab>
                        <Tab fontSize="1.2rem" color="white" >Per Employee</Tab>
                    </TabList>
                    <TabPanels textAlign="left" borderTop={`2px solid ${MainGrey}`}>
                        <TabPanel color="white" >
                            <ElectricityPanel />
                        </TabPanel>
                        <TabPanel color="white" >
                            <p>Per Employee</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
        </Flex>
    )
}

export default EmissionsComponent;