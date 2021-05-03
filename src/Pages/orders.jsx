import React from 'react';
import { Heading } from '@chakra-ui/layout';
import { BreakLine, Flex, SubHeader } from '../Styles/styles';
import TableComponent from '../Components/Table/orders_table';
import { dashboardContentTableData } from '../Mocks/dashboard';



// divide sections into different files
const OrdersComponent = () => {

    return (
        <Flex>
            <Heading {...SubHeader}>Orders</Heading>
            <BreakLine />
            <TableComponent size="lg" tableData={dashboardContentTableData} />
        </Flex>
    )
}

export default OrdersComponent;