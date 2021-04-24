
import { useState } from "react";
import { Button } from "@chakra-ui/button"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu"
import { DarkerTheme, MainBlue, MainGrey } from "../../Styles/colors";


const ItemStyle = {
    background: MainBlue, color:'white'
}
const FilterBy = ({byParameter}) => {
    const [timeFilter, setTimeFilter] = useState('Daily');
    const [CO2filter, setCO2Filter] = useState('CO2 Volume');

    if(byParameter === 'time') {
        return (
            <Menu>
                <MenuButton mt="0.4rem" colorScheme="black" bg={DarkerTheme} border={`1px solid ${MainGrey}`} color="white" as={Button} rightIcon={<ChevronDownIcon />} float="right">
                    {timeFilter}
                </MenuButton>
                <MenuList bg={DarkerTheme}>
                    <MenuItem _focus={{background:'trasparent'}} _hover={{...ItemStyle}} onClick={() => setTimeFilter('Daily')}>Daily</MenuItem>
                    <MenuItem _hover={{...ItemStyle}}  onClick={() => setTimeFilter('Weekly')}>Weekly</MenuItem>
                    <MenuItem _hover={{...ItemStyle}}  onClick={() => setTimeFilter('Monthly')}>Monthly</MenuItem>
                    <MenuItem _hover={{...ItemStyle}}  onClick={() => setTimeFilter('Yearly')}>Yearly</MenuItem>
                </MenuList>
            </Menu>
        )
    }
    return (
        <Menu>
            <MenuButton mt="0.4rem" colorScheme="black" bg={DarkerTheme} border={`1px solid ${MainGrey}`} color="white" as={Button} rightIcon={<ChevronDownIcon />} float="right">
                {CO2filter}
            </MenuButton>
            <MenuList bg={DarkerTheme}>
                <MenuItem _focus={{background:'trasparent'}} _hover={{...ItemStyle}} onClick={() => setCO2Filter('CO2')}>CO2 Volume</MenuItem>
                <MenuItem _hover={{...ItemStyle}}  onClick={() => setCO2Filter('Orders')}>Orders</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default FilterBy;