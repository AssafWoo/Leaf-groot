import React from 'react';
import { Heading } from '@chakra-ui/layout';
import { BreakLine, Flex, SubHeader } from '../Styles/styles';
import {APITableData} from '../Mocks/api_sort_types';
import APITableComponent from '../Components/Table/api_table';

// need to build a database for integrations data
const APICallsComponent = () => {

    return(
        <Flex>
            <Heading {...SubHeader}>Your Api Requests</Heading>
            <BreakLine />
            <APITableComponent size="lg" tableData={APITableData} />
        </Flex>
    )
}

export default APICallsComponent;