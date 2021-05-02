import { Table, Tr, Th, Thead, Tbody,Td } from "@chakra-ui/table"
import { TableWrapper } from "../../Styles/styles";
import { useScreenSize } from "../../Hooks/useScreenSize";
import ModalComponent from "../Modal/modal";
import { useState } from "react";

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
    const ScreenSize = useScreenSize();
    const [currentSort, setCurrentSort] = useState('up');
    const [sortedElementIndex, setSortedElementIndex] = useState(0);


    const getIndexOfSortType = (header) => {
        console.log(header);
        let index = sortTypes.findIndex(obj => obj.name === header);
        console.log(index);
        if(index < 0){
            return 0;
        }
        return index;
    }

    const onSortChange = (header) => {
        let nextSort;
        setSortedElementIndex(getIndexOfSortType(header));
        console.log(sortedElementIndex);
        if (currentSort === 'down') nextSort = 'up';
		else if (currentSort === 'up') nextSort = 'down';
        setCurrentSort(nextSort);
    }


    return(
        <>
            <TableWrapper size={ScreenSize}>
                <Table variant='simple'>
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
                                        content={`The project was bought on ${project.date} and saved ${project.mass} CO2, the transaction is ${project.status}`}
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