
import { useState } from "react";
import { Button } from "@chakra-ui/button"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu"
import { DarkerTheme, MainBlue, MainGrey } from "../../Styles/colors";


const ItemStyle = {
    background: MainBlue, color:'white'
}
const FilterBy = ({parameters}) => {
    const [filter, setFilter] = useState(parameters[0]);

    return (
        <Menu>
            <MenuButton mt="0.4rem" colorScheme="black" bg={DarkerTheme} border={`1px solid ${MainGrey}`} color="white" as={Button} rightIcon={<ChevronDownIcon />} float="right">
                {filter}
            </MenuButton>
            <MenuList bg={DarkerTheme}>
                {parameters.map((value, index) => (
                <MenuItem _focus={{background:'trasparent'}} _hover={{...ItemStyle}} onClick={() => setFilter(value)}>{value}</MenuItem>

                ))}
            </MenuList>
        </Menu>
    )
}

export default FilterBy;