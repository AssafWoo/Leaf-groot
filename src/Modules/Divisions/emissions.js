import React from 'react';


import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs';
import { DarkTheme } from '../../Styles/colors';

 
const DivisionsComponent = () => {

    return (
        <Tabs variant="soft-rounded" borderRadius="20px" padding="1rem" colorScheme="green" bg={'white'} >
            <TabList marginBottom="1rem">
                <Tab fontSize="1.2rem" color={DarkTheme}>R&D</Tab>
                <Tab fontSize="1.2rem" color={DarkTheme}>Managment</Tab>
                <Tab fontSize="1.2rem" color={DarkTheme}>Marketing</Tab>
            </TabList>
            <TabPanels textAlign="left" borderTop={`1px solid ${DarkTheme}`}>
                <TabPanel color={DarkTheme}>
                <p>R&D!</p>
                </TabPanel>
                <TabPanel color={DarkTheme}>
                <p>Managment</p>
                </TabPanel>
                <TabPanel color={DarkTheme}>
                <p>Marketing!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default DivisionsComponent;