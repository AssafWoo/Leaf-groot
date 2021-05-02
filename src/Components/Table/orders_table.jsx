import { Table, Tr, Th, Thead, Tbody,Td } from "@chakra-ui/table"
import { TableWrapper } from "../../Styles/styles";
import { useScreenSize } from "../../Hooks/useScreenSize";
import ModalComponent from "../Modal/modal";

const TheadStyle = {
    color:'white'
};


const TableComponent = ({tableData}) => {
    const ScreenSize = useScreenSize();

    return(
        <>
            <TableWrapper size={ScreenSize}>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            {tableData?.headers?.map((header, _) => (
                            <Th style={TheadStyle}>{header}</Th>
                            ))}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {tableData?.data?.map((project, index) => (
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