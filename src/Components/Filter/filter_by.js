
import { useState } from "react";
import { Button } from "@chakra-ui/button"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu"
import { DarkerTheme, MainBlue, MainGrey } from "../../Styles/colors";


const FilterBy = () => {
    const [filter, setFilter] = useState('Daily');
    return (
        <Menu>
            <MenuButton mt="0.4rem" colorScheme="white" bg={DarkerTheme} border={`1px solid ${MainGrey}`} color="white" as={Button} rightIcon={<ChevronDownIcon />} float="right">
                {filter}
            </MenuButton>
            <MenuList colorScheme="white" bg={DarkerTheme}>
                <MenuItem _hover={{background: MainBlue, color:'white'}} onClick={() => setFilter('Daily')}>Daily</MenuItem>
                <MenuItem _hover={{background: MainBlue, color:'white'}}  onClick={() => setFilter('Weekly')}>Weekly</MenuItem>
                <MenuItem _hover={{background: MainBlue, color:'white'}}  onClick={() => setFilter('Monthly')}>Monthly</MenuItem>
                <MenuItem _hover={{background: MainBlue, color:'white'}}  onClick={() => setFilter('Yearly')}>Yearly</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default FilterBy;