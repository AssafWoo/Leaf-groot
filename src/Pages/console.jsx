import React from 'react';
import { Heading } from '@chakra-ui/layout';
import { BreakLine, Flex, Parag, SubHeader } from '../Styles/styles';
import TableComponent from '../Components/Table/orders_table';
import { dashboardContentTableData } from '../Mocks/order_sort_types';


const ConsoleOForApiCalls = () => {

    return (
        <Flex>
            <Heading {...SubHeader}>Console</Heading>
            <Parag style={{color:'white'}}>List of your api calls and their status</Parag>
            <BreakLine />
            <TableComponent size="lg" tableData={dashboardContentTableData} />
        </Flex>
    )
}

export default ConsoleOForApiCalls;