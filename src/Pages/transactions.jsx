import React from 'react';
import { Heading } from '@chakra-ui/layout';
import { BoxSize, BreakLine, Flex, SubHeader } from '../Styles/styles';
import TableTemplate from '../Components/Table/table-template';
import { transactionsColumns } from '../Components/Table/data-stracture';
import {transactionsData } from '../Mocks/transactions-mock';
import { DarkerTheme, DarkTheme } from '../Styles/colors';



// divide sections into different files
const TransactionsComponent = () => {

    return (
        <Flex>
            <Heading {...SubHeader}>Transactions</Heading>
            <BreakLine />
            <BoxSize flexSize="5" isInvisible={false} style={{background:DarkerTheme, border:`4px solid ${DarkTheme}`, borderRadius:'15px'}}>
                <TableTemplate tableData={transactionsData.data} columnsType={transactionsColumns} />
            </BoxSize>
        </Flex>
    )
}

export default TransactionsComponent;