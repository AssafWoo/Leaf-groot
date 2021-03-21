import React from 'react';


import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs';
import { DarkTheme } from '../../Styles/colors';

 
const EmissionsComponent = () => {

    return (
        <Tabs variant="soft-rounded" borderRadius="20px" padding="1rem" colorScheme="green" bg={'white'} >
            <TabList marginBottom="1rem">
                <Tab fontSize="1.2rem" color={DarkTheme}>Travel</Tab>
                <Tab fontSize="1.2rem" color={DarkTheme}>Electricity</Tab>
                <Tab fontSize="1.2rem" color={DarkTheme}>Employees</Tab>
            </TabList>
            <TabPanels textAlign="left" borderTop={`1px solid ${DarkTheme}`}>
                <TabPanel color={DarkTheme}>
                <p>Travel!</p>
                </TabPanel>
                <TabPanel color={DarkTheme}>
                <p>Electricity</p>
                </TabPanel>
                <TabPanel color={DarkTheme}>
                <p>Employees!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default EmissionsComponent;