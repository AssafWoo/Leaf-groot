import { Table, Tr, Th, Thead, Tbody,Td } from "@chakra-ui/table"
import { TableWrapper } from "../../Styles/styles";
import { useScreenSize } from "../../Hooks/useScreenSize";


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
                        <Td>Amazon Tribe</Td>
                        <Td>Transfered</Td>
                        <Td>Forestation</Td>
                        <Td>150Kg</Td>
                        <Td>10$</Td>
                        <Td>10/5/21</Td>
                        <Td>Go to details</Td>
                    </Tr>
                    <Tr>
                        <Td>Amazon Tribe</Td>
                        <Td>Transfered</Td>
                        <Td>Forestation</Td>
                        <Td>150Kg</Td>
                        <Td>10$</Td>
                        <Td>10/5/21</Td>
                        <Td>Go to details</Td>
                    </Tr>
                
                </Tbody>
            </Table>
        </TableWrapper>
    )
}

export default OrdersTable;