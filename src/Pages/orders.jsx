import React from 'react';
import { Heading } from '@chakra-ui/layout';
import { BoxSize, BreakLine, Flex, SubHeader } from '../Styles/styles';
import TableTemplate from '../Components/Table/table-template';
import { transactionsColumns } from '../Components/Table/data-stracture';
import {transactionsData } from '../Mocks/transactions-mock';



// divide sections into different files
const OrdersComponent = () => {

    return (
        <Flex>
            <Heading {...SubHeader}>Orders</Heading>
            <BreakLine />
            <BoxSize style={{borderRadius:'15px'}} flexSize="5" isInvisible={false}>
                <TableTemplate tableData={transactionsData.data} columnsType={transactionsColumns} />
            </BoxSize>
        </Flex>
    )
}

export default OrdersComponent;