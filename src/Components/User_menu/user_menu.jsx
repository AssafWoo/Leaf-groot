import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuList } from "@chakra-ui/menu";
import { Portal } from "@chakra-ui/portal";
import { DarkerTheme } from "../../Styles/colors";


const UserMenu = ({icon, children}) => {
    return(
        <Menu>
            <MenuButton color='white' rightIcon={<ChevronDownIcon />}>{icon}</MenuButton>
            <Portal>
                <MenuList _hover={{background:DarkerTheme}} bg={DarkerTheme}>
                   {children}
                </MenuList>
            </Portal>
        </Menu> 
    )
}

export default UserMenu;