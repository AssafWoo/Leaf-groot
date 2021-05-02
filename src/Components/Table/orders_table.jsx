import { Table, Tr, Th, Thead, Tbody,Td } from "@chakra-ui/table"
import { TableWrapper } from "../../Styles/styles";
import { useScreenSize } from "../../Hooks/useScreenSize";
import ModalComponent from "../Modal/modal";
import { useState } from "react";
import useSortedElementIndex from "../../Hooks/useSortedElement";
// import useSort from '../../Hooks/useSort';

const TheadStyle = {
    color:'white'
};


const sortTypes = [
    {
        name:'Mass(Tonne)',
        up: {
            class: 'sort-up',
            fn: (a, b) => a.mass - b.mass
        },
        down: {
            class: 'sort-down',
            fn: (a, b) => b.mass - a.mass
        },
        default: {
            class: 'sort',
            fn: (a, b) => a
        }
    
    },
    {
        name:'Total($)',
        up: {
            class: 'sort-up',
            fn: (a, b) => a.total - b.total
        },
        down: {
            class: 'sort-down',
            fn: (a, b) => b.total - a.total
        },
        default: {
            class: 'sort',
            fn: (a, b) => a
        }
    }
];

const TableComponent = ({tableData}) => {
    const [currrentHeaderTableHeaderToSort, setCurrentTableHeaderToSort] = useState('Mass(Tonne)')
    const sortedElementIndex = useSortedElementIndex(currrentHeaderTableHeaderToSort);

    // const currentSort = useSort();
    const ScreenSize = useScreenSize();
    const [currentSort, setCurrentSort] = useState('up');



    const onSortChange = (header) => {
        let nextSort;
        setCurrentTableHeaderToSort(header);
        if (currentSort === 'down') nextSort = 'up';
		if (currentSort === 'up') nextSort = 'down';
        setCurrentSort(nextSort);
    }


    return(
        <>
            <TableWrapper size={ScreenSize}>
                <Table size="sm" variant='simple'>
                    <Thead>
                        <Tr>
                            {tableData?.headers?.map((header, _) => (
                            <Th onClick={(e) => onSortChange(header)} style={TheadStyle}>{header}</Th>
                            ))}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {[...tableData?.data]?.sort(sortTypes[sortedElementIndex][currentSort].fn).map((project, index) => (
                            <Tr>
                                <Td>{project.name}</Td>
                                <Td>{project.status}</Td>
                                <Td>{project.type}</Td>
                                <Td>{project.mass}</Td>
                                <Td>{project.total}</Td>
                                <Td>{project.date}</Td>

                                <Td>
                                    <ModalComponent
                                        openButtonContent='...'
                                        header={project.name} 
                                        content={`The project was bought on ${project.date} and saved ${project.mass} Tonne CO2, the transaction is ${project.status}`}
                                        goToActionButton='empty'
                                    />
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableWrapper>
        </>
    )
}

export default TableComponent;