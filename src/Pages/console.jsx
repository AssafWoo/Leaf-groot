import React from 'react';
import { Heading } from '@chakra-ui/layout';
import { BoxSize, BreakLine, Flex, Parag, SubHeader } from '../Styles/styles';
import { requestsColumns } from '../Components/Table/data-stracture';
import TableTemplate from '../Components/Table/table-template';
import {requestsData } from '../Mocks/requests-mock';


const ConsoleOForApiCalls = () => {

    return (
        <Flex>
            <Heading {...SubHeader}>Console</Heading>
            <Parag style={{color:'white'}}>List of your api calls and their status</Parag>
            <BreakLine />
            <BoxSize flexSize="5" isInvisible={false}>
                <TableTemplate columnsType={requestsColumns} tableData={requestsData.data} />

            </BoxSize>
        </Flex>
    )
}

export default ConsoleOForApiCalls;