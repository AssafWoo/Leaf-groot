import React from 'react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs';
import { DarkTheme, MainGrey } from '../Styles/colors';
import ElectricityPanel from '../Modules/emissions/electricity-panel';



// divide sections into different files
const EmissionsComponent = () => {

    return (
        <Tabs variant="soft-rounded" borderRadius="20px" padding="1rem" colorScheme="facebook" bg={DarkTheme} border={`1px solid ${MainGrey}`} >
            <TabList marginBottom="1rem">
                <Tab fontSize="1.2rem" color="white" >Electricity</Tab>
                <Tab fontSize="1.2rem" color="white" >Travel</Tab>
                <Tab fontSize="1.2rem" color="white" >Employees</Tab>
            </TabList>
            <TabPanels textAlign="left" borderTop={`2px solid ${MainGrey}`}>
                <TabPanel color="white" >
                    <ElectricityPanel />
                </TabPanel>
                <TabPanel color="white" >
                    <p>Travel</p>
                </TabPanel>
                <TabPanel color="white" >
                    <p>Employees!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default EmissionsComponent;