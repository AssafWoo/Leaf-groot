
import { useState } from "react";
import { Button } from "@chakra-ui/button"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu"


const FilterBy = () => {
    const [filter, setFilter] = useState('Daily');
    return (
        <Menu>
            <MenuButton mt="0.4rem" as={Button} rightIcon={<ChevronDownIcon />} float="right">
                {filter}
            </MenuButton>
            <MenuList>
                <MenuItem onClick={() => setFilter('Daily')}>Daily</MenuItem>
                <MenuItem onClick={() => setFilter('Weekly')}>Weekly</MenuItem>
                <MenuItem onClick={() => setFilter('Monthly')}>Monthly</MenuItem>
                <MenuItem onClick={() => setFilter('Yearly')}>Yearly</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default FilterBy;