import { Table, Tr, Th, Thead, Tbody,Td } from "@chakra-ui/table"
import { TableWrapper } from "../../Styles/styles";
import { useScreenSize } from "../../Utils/useScreenSize";
import { useState } from "react";
import useSortedArray from "../../Utils/useSortedElement";
// import useSort from '../../Hooks/useSort';

const TheadStyle = {
    color:'white'
};



const APITableComponent = ({tableData = [], size}) => {
    const [currentSort, setCurrentSort] = useState('default');
    const [currrentHeaderTableHeaderToSort, setCurrentTableHeaderToSort] = useState('Mass(Tonne)')
    const sortedArray= useSortedArray(currrentHeaderTableHeaderToSort, tableData, currentSort, 'API');

    const ScreenSize = useScreenSize();

    const onSortChange = (header) => {
        let nextSort;
        if (currentSort === 'down') nextSort = 'up';
        if (currentSort === 'up') nextSort = 'down';
		else if (currentSort === 'default') nextSort = 'down';
        setCurrentSort(nextSort);
        setCurrentTableHeaderToSort(header);
    }

    if(!sortedArray) {
        return <p>No data found</p>
    }
    return(
        <>
            <TableWrapper size={ScreenSize}>
                <Table size={size} variant='simple'>
                    <Thead>
                        <Tr>
                            {tableData?.headers?.map((header, _) => (
                            <Th onClick={(e) => onSortChange(header)} style={TheadStyle}>{header}</Th>
                            ))}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {sortedArray && sortedArray.map((project, index) => (
                            <Tr>
                                <Td>{project.id}</Td>
                                <Td>{project.type}</Td>
                                <Td>{project.status}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableWrapper>
        </>
    )
}

export default APITableComponent;