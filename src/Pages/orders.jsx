import React from 'react';
import { Heading } from '@chakra-ui/layout';
import { BoxSize, BreakLine, Flex, SubHeader } from '../Styles/styles';
import TableTemplate from '../Components/Table/table-template';
import { transactionsColumns } from '../Components/Table/data-stracture';



// divide sections into different files
const OrdersComponent = () => {

    return (
        <Flex>
            <Heading {...SubHeader}>Orders</Heading>
            <BreakLine />
            <BoxSize style={{borderRadius:'15px'}} flexSize="5" isInvisible={false}>
                <TableTemplate columnsType={transactionsColumns} />
            </BoxSize>
        </Flex>
    )
}

export default OrdersComponent;