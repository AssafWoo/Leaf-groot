import { Table, Tr, Th, Thead, Tbody,Td } from "@chakra-ui/table"
import { TableWrapper } from "../../Styles/styles";
import { useScreenSize } from "../../Utils/useScreenSize";
import ModalComponent from "../Modal/modal";
import { useState } from "react";
import useSortedArray from "../../Utils/useSortedElement";
// import useSort from '../../Hooks/useSort';

const TheadStyle = {
    color:'white'
};



const OrderTableComponent = ({tableData = [], size}) => {
    const [currentSort, setCurrentSort] = useState('default');
    const [currrentHeaderTableHeaderToSort, setCurrentTableHeaderToSort] = useState('Mass(Tonne)')
    
    const sortedArray= useSortedArray(currrentHeaderTableHeaderToSort, tableData, currentSort, 'Orders');

    const ScreenSize = useScreenSize();

    const onSortChange = (header) => {
        let nextSort;
        if (currentSort === 'down') nextSort = 'up';
        if (currentSort === 'up') nextSort = 'down';
		else if (currentSort === 'default') nextSort = 'down';
        setCurrentSort(nextSort);
        setCurrentTableHeaderToSort(header);
    }
    if(tableData.length === 0 || !sortedArray){
        return <p>Error accured</p>
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

export default OrderTableComponent;