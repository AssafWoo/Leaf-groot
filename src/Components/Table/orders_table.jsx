import { Table, Tr, Th, Thead, Tbody,Td } from "@chakra-ui/table"
import { TableWrapper } from "../../Styles/styles";
import { useScreenSize } from "../../Utils/useScreenSize";


const TheadStyle = {
    color:'white'
};

const OrdersTable = () => {
    const ScreenSize = useScreenSize();

    return(
        <TableWrapper size={ScreenSize}>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th style={TheadStyle}>Project</Th>
                        <Th style={TheadStyle}>Status</Th>
                        <Th style={TheadStyle}>Type</Th>
                        <Th style={TheadStyle}>Mass</Th>
                        <Th style={TheadStyle}>Total</Th>
                        <Th style={TheadStyle}>Created on</Th>
                        <Th style={TheadStyle}>Details</Th>

                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>1</Td>
                        <Td>1</Td>
                        <Td>1</Td>
                        <Td>1</Td>
                        <Td>1</Td>
                        <Td>1</Td>
                        <Td>1</Td>

                    </Tr>
                    <Tr>
                        <Td>2</Td>
                        <Td>2</Td>
                        <Td>2</Td>
                        <Td>2</Td>
                        <Td>2</Td>
                        <Td>2</Td>
                        <Td>2</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableWrapper>
    )
}

export default OrdersTable;